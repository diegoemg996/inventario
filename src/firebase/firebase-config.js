import firebase from 'firebase/app';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyC_IyisG_DdJoBDkQ2e799ns5SHVn1O9p4",
    authDomain: "vyana-f26a9.firebaseapp.com",
    projectId: "vyana-f26a9",
    storageBucket: "vyana-f26a9.appspot.com",
    messagingSenderId: "529445926408",
    appId: "1:529445926408:web:4a6a36a0ccd239610ac3bd"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}