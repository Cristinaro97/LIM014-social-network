import { signInGoogle, login } from '../controler/auth.js';

export default () => {
  const viewLogIn = `
    <h1>Dukigram</h1>
    <i></i>
    <img class="logo" src='./img/logo.png'>
    <form>
    <p><input class="email" type="email" id="email" placeholder="Email"></p>
    <p><input class="pass" type="password" id="txtPass" placeholder="Password"></p>
    <p><input class="login" type="button" id="Login" value="Login"></p>
    <h2>Or sign in with</h2>
    <img src="https://image.flaticon.com/icons/png/512/300/300221.png" 
    class="google" id="logGoogle">
    <img src="https://image.flaticon.com/icons/png/512/733/733547.png" 
    class="facebook" id="logFacebook">
    <h2>You don't have an account? <a href="#/signup">SIGN UP</a></h2>
    </form>
    `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewLogIn;
  // Login
  const loginUse = divElem.querySelector('#Login');
  loginUse.addEventListener('click', (event) => {
    event.preventDefault();
    const email = divElem.querySelector('#email').value;
    const password = divElem.querySelector('#txtPass').value;
    login(email, password).then(() => {
      // console.log(result);
      window.location.hash = '#/home';
    });
  });
  // Login Google
  const logGoogle = divElem.querySelector('#logGoogle');
  logGoogle.addEventListener('click', () => {
    signInGoogle()
      .then(() => {
        // console.log('google sign in', result);
      })
      .catch(() => {
        // console.log(err);
      });
  });
  return divElem;
};
