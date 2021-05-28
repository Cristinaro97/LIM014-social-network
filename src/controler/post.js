import { deletePost, updatePost } from './firestore.js';

export const templatePost = (container, dataDoc) => {
  dataDoc.forEach((doc) => {
    const section = document.createElement('div');
    const template = `<div class="flex-container" id="containerPost">
    <h3>${doc.userName}</h3>
    <h4>${doc.date}</h4>
    <svg class="circle" height="60" width="80">
      <circle cx="30" cy="30" r="25"/>
    </svg>
    <p id="description" class="post">  ${doc.description}</p>
    <div class="buttoncitos"><button id="delete" class="delete" data-id=${doc.id}>delete</button>
    <button id="edit" class="edit" data-id=${doc.id}>edit</button>
    <button id="save" class="save" data-id=${doc.id}>save</button></div>
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
