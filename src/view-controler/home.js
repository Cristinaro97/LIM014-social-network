import { addPost, getPost } from '../controler/firestore.js';
import { templatePost } from '../controler/post.js';
import { logout } from '../controler/auth.js';

export default (user) => {
  const viewPosts = `
  <div id="superior">
    <ul class="nav">
      <li class="menu"><a>menu</a>
      <ul id='divs'><li><a href="#">Profile</a></li>
      <li><a href="#">Settings</a></li>
      <li><a id="logout" href="#/login">Log out</a></li>
      </ul>
      </li>
    </ul>
  </div>
  <section class="dukigram">Dukigram</section>
  <article class = "create-post">
  <h2>${`${user.firstName} ${user.lastName}`}</h2>
  <div class="img-textPost">
    <svg height="60" width="80">
      <circle cx="30" cy="30" r="25"/>
    </svg>
  <input type="text" id="textarea" placeholder="what're you thinking?">
  </input></div>
  <button class="buttonpost" id="post">to share</button>
  <div class="sectionPost" id="sectionPost"></div>
  </article>
  `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewPosts;

  // menu desplegable
  const menu = divElem.querySelector('.menu');
  menu.addEventListener('click', (e) => {
    divElem.querySelector('#divs').style.display = 'block';
  });
  // log out
  const buttonLogout = divElem.querySelector('#logout');
  buttonLogout.addEventListener('click', (e) => {
    console.log('aaaa');
    e.preventDefault();
    logout().then(() => {
      window.location.hash = '#/login';
    });
  });
  const postText = divElem.querySelector('#post');
  postText.addEventListener('click', () => {
    const area = divElem.querySelector('#textarea').value; // captura lo que ingresa el usuario, valor de la etiqueta
    addPost(area, user.userId, user.firstName);
    divElem.querySelector('#textarea').value = '';
  });

  // acá es mi contenedor de posts
  const sectionPost = divElem.querySelector('#sectionPost');

  // acá recibo la data de los posts
  getPost((postData) => {
    console.log('INFO DEL POST', postData);
    sectionPost.innerHTML = '';
    templatePost(sectionPost, postData, user);
  });

  return divElem;
};
