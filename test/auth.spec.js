import {
  createAccount,
  login,
  signInGoogle,
  logout,
} from '../src/controler/auth';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase(); mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(() => null, () => mockauth);

describe('function for the login with email and password', () => {
  // login
  it('Is a function', () => {
    expect(typeof login).toBe('function');
  });
  it('should be log with email and password', () => login('cristina@example.com', 'examplePass').then((user) => {
    expect(user.email).toBe('cristina@example.com');
  }));
  // createAccount
  it('should be create account', () => createAccount('cristina@example.com', 'examplePass').then((user) => {
    expect(user.email).toBe('cristina@example.com');
  }));
  // signInGoogle
  it('Debería ser google.com', () => { signInGoogle().then((google) => { expect(google.providerData[0].providerId).toBe('google.com'); }); });
  // logout
  it('Debería salir de sesión y el usuario retornar null', () => {
    logout().then((user) => { expect(user).toBe(null); });
  });
});
