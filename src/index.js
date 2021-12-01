import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBm7-SzimCTOo1O9SOM16MLjceP6JtHvM8',
  authDomain: 'fir-9-sandbox-492eb.firebaseapp.com',
  projectId: 'fir-9-sandbox-492eb',
  storageBucket: 'fir-9-sandbox-492eb.appspot.com',
  messagingSenderId: '1081286491538',
  appId: '1:1081286491538:web:9345e4b56448591658d54b',
};

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'books');

getDocs(colRef)
  .then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
  })
  .catch((err) => {
    console.error(err.message);
  });
