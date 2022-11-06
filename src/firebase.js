// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyDUYSZicVoMeiUaAcqYo6-qDuxoU6i3BfI",
  authDomain: "imageupload-28cb9.firebaseapp.com",
  databaseURL:
    "https://imageupload-28cb9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "imageupload-28cb9",
  storageBucket: "imageupload-28cb9.appspot.com",
  messagingSenderId: "606803029623",
  appId: "1:606803029623:web:687bd7cb35c70755ffa072",
});

// Initialize Firebase

export const storage = getStorage(app);
export const auth = firebase.auth();
export default app;
