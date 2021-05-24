import { addPost, getPost } from '../controler/firestore.js';
import { templatePost } from '../controler/post.js';

export default (user) => {
  const viewPosts = `
  <nav>
  <a class="navhome" href="#">Log out</a>
  </nav>
  <form id="task-form">
  <h1>${`${user.firstName} ${user.lastName}`}</h1>
  <div class="flex-container">
  <div><textarea id="description" class="post" placeholder="what're you thinking?"></textarea></div>
  </div>
  <button class="buttonpost" id="post">to share</button>
  <div class="sectionPost" id="sectionPost"></div>
  </form>
  `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewPosts;

  const postText = divElem.querySelector('#post');
  postText.addEventListener('click', () => {
    const area = divElem.querySelector('#description').value; // captura lo que ingresa el usuario, valor de la etiqueta
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
