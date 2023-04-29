import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyAStzW3Acr78IBXmjhotbZsB5WmXqZpVHg",
  authDomain: "g8deliveryfood-2e067.firebaseapp.com",
  databaseURL: "https://g8deliveryfood-2e067-default-rtdb.firebaseio.com",
  projectId: "g8deliveryfood-2e067",
  storageBucket: "g8deliveryfood-2e067.appspot.com",
  messagingSenderId: "945530499084",
  appId: "1:945530499084:web:73e418b8abde58354cfe29"
};

firebase.initializeApp(firebaseConfig);

export default firebase;