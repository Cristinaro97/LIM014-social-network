import { templatePost } from './post.js';

const db = firebase.firestore();
export const userCollection = (userId, firstName, lastName, email, password) => db.collection('users').doc(userId).set({
  userId,
  firstName,
  lastName,
  email,
  password,
});
export const getDataUser = (currentUser) => db.collection('users').doc(currentUser).get();
export const addPost = (description, user) => {
  db.collection('posts').add({
    description,
    user,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    photo: '',
    like: '',
    coment: '',
  });
};
export const getPost = (callback) => {
  console.log(Date.now());
  return db.collection('posts').orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
      });
      callback(posts);
    });
};
export const deletePost = (data) => db.collection('posts').doc(data).delete();
export const getData = (post) => {
  const sectionPost = document.querySelector('#sectionPost');
  console.log(sectionPost);
  sectionPost.innerHTML = '';
  if (post.length) {
    post.forEach((doc) => {
      const section = templatePost(doc);
      console.log(section);
      sectionPost.appendChild(section);
      const deleteButton = sectionPost.querySelector('#delete');
      deleteButton.addEventListener('click', (e) => {
        const idPost = e.target.dataset.id;
        deletePost(idPost);
      });
    });
  }
};
