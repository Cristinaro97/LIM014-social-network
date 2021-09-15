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
export const logout = () => firebase.auth().signOut();
