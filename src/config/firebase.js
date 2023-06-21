import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBqV0Vxqe0jUHquCM5oabOOGbja6g9sHEo",
  authDomain: "tik-tok---clone---1.firebaseapp.com",
  projectId: "tik-tok---clone---1",
  storageBucket: "tik-tok---clone---1.appspot.com",
  messagingSenderId: "974631465591",
  appId: "1:974631465591:web:0371950413e6b749418c72"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;