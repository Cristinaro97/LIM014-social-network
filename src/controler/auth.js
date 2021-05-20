export const login = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);
export const createAccount = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);
export const signInGoogle = () => {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};
export const userState = (user) => firebase.auth().onAuthStateChanged(user);
// user = funcion y userState= funcion callback
/* firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  *///
