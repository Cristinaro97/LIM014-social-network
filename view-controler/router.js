/* eslint-disable no-console */
import { components } from '../view/index.js';
import { getDataUser } from '../controler/firestore.js';
import { userState } from '../controler/auth.js';

console.log(components);
const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    { return container.appendChild(components.login()); }
    case '#/':
    { return container.appendChild(components.login()); }
    case '#/login':
    { return container.appendChild(components.login()); }
    case '#/signup':
    { return container.appendChild(components.signup()); }
    case '#/home':
    {
      userState((user) => {
        // usuario logeado, para que no dejen entrar al usuario si es que no se ha logeado
        if (user !== null) {
          getDataUser(user.uid).then((doc) => {
            container.innerHTML = ''; // limpia el texto
            container.appendChild(components.home(doc.data()));
          });
        }
      });

      break;
    }
    default:
      break;
  }
  console.log(route);
  return 1;
};
export { changeView };
