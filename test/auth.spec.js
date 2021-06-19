import { login } from '../src/controler/auth';

// , createAccount, signInGoogle, userState, logout,
// const mockauth = new firebasemock.MockAuthentication();
// const mockfirestore = new firebasemock.MockFirestore();
// const mockstorage = new firebasemock.MockStorage();
// mockauth.autoFlush();
// simula los mét y prop de firebase auth global.firebase = new
// firebasemock.MockFirebaseSdk( null, () => mockauth, () =>
// mockfirestore, () => mockstorage, null, )

describe('function for the login with email and password', () => {
  it('Is a function', () => {
    expect(typeof login).toBe('function');
  }); it('should be log with email and password', () => login('cristina@example.com', 'examplePass').then((user) => {
    expect(user.email).toBe('cristina@example.com');
  }));
});
