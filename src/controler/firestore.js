/* eslint-disable no-console */
// USER
const db = firebase.firestore();
export const userCollection = (userId, firstName, lastName, email, password) => db.collection('users').doc(userId).set({
  userId,
  firstName,
  lastName,
  email,
  password,
});
export const getDataUser = (currentUser) => db.collection('users').doc(currentUser).get();
const datePostDB = () => {
  const datePost = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  const timePost = {
    hour12: 'true',
    hour: 'numeric',
    minute: 'numeric',
  };
  const date = new Date().toLocaleDateString('es-Es', datePost);
  const time = new Date().toLocaleTimeString('es-Es', timePost);
  const dateTime = `${date} ${time}`;

  return dateTime;
};
/* POST */
export const addPost = (description, userId, userName) => {
  db.collection('posts').add({
    description,
    userId,
    date: datePostDB(),
    photo: '',
    like: [],
    coment: '',
    userName,
  });
};
export const likes = (idPost, like) => {
  db.collection('posts').doc(idPost).update({ like });
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
export const deletePost = (id) => db.collection('posts').doc(id).delete();
export const updatePost = (id, edit) => db.collection('posts').doc(id).update({
  description: edit,
});
