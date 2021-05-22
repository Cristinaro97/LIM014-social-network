import { addPost, getData, getPost } from '../controler/firestore.js';

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
    const area = document.querySelector('#description').value; // captura lo que ingresa el usuario, valor de la etiqueta
    addPost(area, user.userId);
    // document.addEventListener('keydown', getEventType, false);
    // area.addEventListener();
    /* addPost(description, user, date, photo, like, coment); */
  });
  // const postPrint = document.createElement('div');
  // area.innerHTML = postPrint;
  getPost((post) => {
    getData(post, divElem);
  });
  return divElem;
};

/* const divPost = document.createElement('div');
divPost.innerHTML += `<div class="flex-container">
<div><textarea id="description" class="post" >${doc.description}</textarea></div>` */
