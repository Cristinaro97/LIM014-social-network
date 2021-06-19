import MockFirebase from 'mock-cloud-firestore';
import {} from '../src/controler/auth';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        Post001: {
          userId: '001',
          name: 'Chio',
          description: 'No me testeen',
          privacy: 'Publico',
          date: '20 de mayo 2021',
          likes: [],
          imageURL: 'src/img/perrito3.0.png',
        },
        Post002: {
          userId: '002',
          name: 'Bri',
          description: 'GG',
          privacy: 'Publico',
          date: '22 de mayo 2021',
          likes: ['001', '002'],
          imageURL: 'src/img/perrito3.0.png',
        },
      },
    },
    comments: {
      __doc__: {
        comment001: {
          comment: 'well',
          date: '20 may 2021',
          imageURL: 'src/img/perrito3.0.png',
          userId: '002',
          username: 'Thais',
        },
      },
    },
  },
};

// Instancia de la libreria
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
