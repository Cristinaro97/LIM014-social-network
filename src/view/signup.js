import { createAccount } from '../controler/auth.js';
import { userCollection } from '../controler/firestore.js';

export default () => {
  const viewHome = `
  <h1>Dukigram</h1>
  <i></i>
    <img class="logo" src='./img/logo.png'>
   <form>
   <p><input class="return" type="button" id="return" onclick="location.href='#/login';" value="Login"></p>
   <p><input class="fname" type="text" id="firstName" placeholder="First Name"></p>
   <p><input class="lname" type="text" id="lastName" placeholder="Last Name"></p>
   <p><input class="email" type="email" id="email" placeholder="Email"></p>
   <p><input class="pass" type="password" id="txtPass" placeholder="Password"></p>
   <p><button class="signup" type="submit" id="signUp">Sign Up</button></p>
   </form>
  `;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  const datos = divElem.querySelector('#signUp');
  datos.addEventListener('click', (event) => {
    event.preventDefault();
    const email = divElem.querySelector('#email').value;
    const password = divElem.querySelector('#txtPass').value;
    createAccount(email, password).then((result) => {
      const userId = firebase.auth().currentUser;
      const firstName = divElem.querySelector('#firstName').value;
      const lastName = divElem.querySelector('#lastName').value;
      userCollection(userId.uid, firstName, lastName, email, password);
      console.log(result);
      window.alert('Se registró correctamente');
      window.location.hash = '#/home';
    });
  });
  return divElem;
};
