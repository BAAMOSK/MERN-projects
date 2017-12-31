import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyCXkOlGhBAVUZdRiqWvoEbrjMfff3im4Jg",
    authDomain: "newestegg.firebaseapp.com",
    databaseURL: "https://newestegg.firebaseio.com",
    projectId: "newestegg",
    storageBucket: "newestegg.appspot.com",
    messagingSenderId: "108408320359"
});

export const db  = app.database();
export const namesRef = db.ref('names');
