import { posts } from '../controler/firestore.js';

export default () => {
  const viewPosts = `
  <div class="container" id="posts">Dukigram</div>
    `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewPosts;
  return divElem;
};
const postList = document.querySelector('.posts');
