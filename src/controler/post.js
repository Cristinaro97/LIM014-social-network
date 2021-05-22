export const templatePost = (doc) => {
  const section = document.createElement('div');
  const template = `<div class="flex-container">
    <p id="description" class="post">  ${doc.description}</p>
    <button id="delete" class="delete" data-id=${doc.id}>delete</button>
    <button id="edit" class="edit">edit</button>
    </div>`;
  section.innerHTML = template;
  return section;
};
