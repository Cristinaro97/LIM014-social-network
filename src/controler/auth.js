export const createAccount = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);
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
