// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUYSZicVoMeiUaAcqYo6-qDuxoU6i3BfI",
  authDomain: "imageupload-28cb9.firebaseapp.com",
  projectId: "imageupload-28cb9",
  storageBucket: "imageupload-28cb9.appspot.com",
  messagingSenderId: "606803029623",
  appId: "1:606803029623:web:687bd7cb35c70755ffa072",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
