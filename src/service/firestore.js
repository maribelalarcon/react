import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9JV8FTTbDvY6nqvu2YQEQ-9REgzVuyIo",
    authDomain: "clase12-49563.firebaseapp.com",
    projectId: "clase12-49563",
    storageBucket: "clase12-49563.appspot.com",
    messagingSenderId: "387475620521",
    appId: "1:387475620521:web:6a12d7a944a4a981b81fb8"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
    return app.firestore();
}