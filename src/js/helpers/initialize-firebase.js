import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDl7udEYc6yHxHTsho7iDZ8HPitihaHEU4',
  authDomain: 'filmoteka-46cf5.firebaseapp.com',
  databaseURL:
    'https://filmoteka-46cf5-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-46cf5',
  storageBucket: 'filmoteka-46cf5.appspot.com',
  messagingSenderId: '1056346694690',
  appId: '1:1056346694690:web:c5c566f94f38d4dac1167b',
  measurementId: 'G-9M2V8M9NTK',
};

export default  initializeApp(firebaseConfig);