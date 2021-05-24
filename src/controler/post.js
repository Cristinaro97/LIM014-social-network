import { deletePost } from './firestore.js';

export const templatePost = (container, dataDoc) => {
  dataDoc.forEach((doc) => {
    const section = document.createElement('div');
    const template = `<div class="flex-container" id="containerPost">
    <p id="description" class="post">  ${doc.description}</p>
    <button id="delete" class="delete" data-id=${doc.id}>delete</button>
    <button id="edit" class="edit">edit</button>
    </div>`;
    section.innerHTML = template;
    const deleteButton = section.querySelector('#delete');
    deleteButton.addEventListener('click', (e) => {
      const idPost = e.target.dataset.id;
      deletePost(idPost);
    });

    return container.appendChild(section);
  });
  console.log('poSSSSSSSSSSSSSSSSSSSSST', dataDoc);
};
