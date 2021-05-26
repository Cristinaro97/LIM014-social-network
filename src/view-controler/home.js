import { addPost, getPost } from '../controler/firestore.js';
import { templatePost } from '../controler/post.js';

export default (user) => {
  const viewPosts = `
  <nav>
  <a class="navhome" href="#">Log out</a>
  </nav>
  <h1>${`${user.firstName} ${user.lastName}`}</h1>
  <article class = "create-post">
  <h2>Share your moments</h2>
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

  const postText = divElem.querySelector('#post');
  postText.addEventListener('click', () => {
    const area = divElem.querySelector('#textarea').value; // captura lo que ingresa el usuario, valor de la etiqueta
    addPost(area, user.userId);
  });

  // acá es mi contenedor de posts
  const sectionPost = divElem.querySelector('#sectionPost');

  // acá recibo la data de los posts
  getPost((postData) => {
    console.log('INFO DEL POST', postData);
    sectionPost.innerHTML = '';
    templatePost(sectionPost, postData);
  });

  return divElem;
};
