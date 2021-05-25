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
export const deletePost = (id) => db.collection('posts').doc(id).delete();
export const updatePost = (id, edit) => db.collection('posts').doc(id).update({
  description: edit,
});
