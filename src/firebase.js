
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBAW8dlqEeKZdUIldlggweb9HBJ4QXaPX0",
    authDomain: "photo-gallery-a0f23.firebaseapp.com",
    projectId: "photo-gallery-a0f23",
   storageBucket: "photo-gallery-a0f23.appspot.com",
   messagingSenderId: "263310152424",
   appId: "1:263310152424:web:e563e1d70a5d5e3d90af5d",
   measurementId: "G-FETKM1G6GQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
