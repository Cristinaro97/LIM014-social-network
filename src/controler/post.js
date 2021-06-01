import { deletePost, updatePost, likes } from './firestore.js';

export const templatePost = (container, dataDoc, user) => {
  dataDoc.forEach((doc) => {
    const section = document.createElement('div');
    const template = `<div class="flex-container" id="containerPost">
    <h3>${doc.userName}</h3>
    <h4>${doc.date}</h4>
    <svg class="circle" height="60" width="80">
      <circle cx="30" cy="30" r="25"/>
    </svg>
    <p id="description" class="post">  ${doc.description}</p>
    <i id="like" class="far fa-heart" ${doc.like.includes(user.userId) ? 'like' : 'unlike'} value="${doc.id}"></i>
    <p>${doc.like.length} likes </p>
    <i class="far fa-comment-dots"></i>
    <div id="buttoncitos" class="buttoncitos"><button id="delete" class="delete" data-id=${doc.id}>delete</button>
    <button id="edit" class="edit" data-id=${doc.id}>edit</button>
    <button id="save" class="save" data-id=${doc.id}>save</button></div>
    </div>`;
    // console.log('ID DEL DOCUMENTO O DE CADA POST', doc.id);
    section.innerHTML = template;
    const deleteButton = section.querySelector('#delete');
    deleteButton.addEventListener('click', (e) => {
      const idPost = e.target.dataset.id;
      deletePost(idPost);
    });
    const likesButton = section.querySelector('#like');
    likesButton.addEventListener('click', (e) => {
      const getLike = doc.like.indexOf(user.userId);
      if (getLike === -1) {
        doc.like.push(user.userId); likes(doc.id, doc.like);
        console.log('kkkkk', user.likes);
        console.log('ooooo', user.id);
      } else {
        doc.like.splice(user, 1);
        likes(doc.id, doc.like);
      }
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
    const buttoncitosAll = section.querySelector('#buttoncitos');
    if (user.userId === doc.userId) {
      buttoncitosAll.style.display = 'block';
    } else {
      buttoncitosAll.style.display = 'none';
    }
    return container.appendChild(section);
  });
  console.log('poSSSSSSSSSSSSSSSSSSSSST', dataDoc);
};
