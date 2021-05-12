import { signInGoogle } from '../controler/auth.js';

export default () => {
  const viewLogIn = `
    <p><input type="email" id="Email" placeholder="Email"></p>
    <p><input type="password" id="txtPass" placeholder="Password"></p>
    <p><input type="button" id="SignUp" value="Login"></p>
    <p><button type="submit" id="logGoogle">Login with Google</button></p>
    <h2>You don't have an account? <a href="#/signup">SIGN UP</a></h2>
    `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewLogIn;
  // Login Google
  const logGoogle = divElem.querySelector('#logGoogle');
  logGoogle.addEventListener('click', () => {
    signInGoogle()
      .then((result) => {
        console.log('google sign in', result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return divElem;
};
