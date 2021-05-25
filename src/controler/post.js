import { deletePost, updatePost } from './firestore.js';

export const templatePost = (container, dataDoc) => {
  dataDoc.forEach((doc) => {
    const section = document.createElement('div');
    const template = `<div class="flex-container" id="containerPost">
    <p id="description" class="post">  ${doc.description}</p>
    <button id="delete" class="delete" data-id=${doc.id}>delete</button>
    <button id="edit" class="edit" data-id=${doc.id}>edit</button>
    <button id="save" class="save" data-id=${doc.id}>save</button>
    </div>`;
    section.innerHTML = template;
    const deleteButton = section.querySelector('#delete');
    deleteButton.addEventListener('click', (e) => {
      const idPost = e.target.dataset.id;
      deletePost(idPost);
    });
    const editButton = section.querySelector('#edit');
    const saveButton = section.querySelector('#save');
    editButton.addEventListener('click', () => {
      console.log(editButton);
      const editId = section.querySelector('#description');
      editId.contentEditable = 'true';
      editId.focus();
      saveButton.classList.remove('hide');
    });
    saveButton.addEventListener('click', (e) => {
      const saveId = section.querySelector('#description');
      const idPost = e.target.dataset.id;
      const contentNew = saveId.innerText;
      if (contentNew !== '') {
        saveId.contentEditable = 'false';
        updatePost(idPost, contentNew);
      }
    });
    return container.appendChild(section);
  });
  console.log('poSSSSSSSSSSSSSSSSSSSSST', dataDoc);
};
