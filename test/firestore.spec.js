import MockFirebase from 'mock-cloud-firestore';
import { userCollection } from '../src/controler/firestore.js';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        Post001: {
          coment: '',
          date: '31 may. 2021 11:49 p. m.',
          description: 'Holis puerca',
          like: [],
          photo: '',
          userId: 'Rm3LPOvdNmf7t3uVlclA9t3agFE2',
          userName: 'Aldo',
        },
        Post002: {
          coment: '',
          date: '31 may. 2021 7:37 p. m.',
          description: 'Hola chio',
          like: [],
          photo: '',
          userId: 'znNv9JQ9iSWHTYn0ketvIy8rK7U2',
          userName: 'Cristina',
        },
      },
    },
    users: {
      __doc__: {
        email: 'betsyvi@hotmail.com',
        firstName: 'Betsy',
        lastName: 'Vidal',
        password: '12345678',
        userId: '8VNRj4OqkXPKqHHk4BW8U21RN5m1',
      },
    },
  },
};

// Instancia de la libreria
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

// userCollection
it('Is a function', () => {
  expect(typeof userCollection).toBe('function');
});
/* it('should be log with email and password', ()
=> login('cristina@example.com', 'examplePass').then((user) => {
  expect(user.email).toBe('cristina@example.com');
})); */
