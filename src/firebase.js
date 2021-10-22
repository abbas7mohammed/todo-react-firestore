import fs from "firebase/compat/app";
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAZLuSoIy1KkJ3b-YDQkDeMST27021FHz8",
  authDomain: "abbas-4f15e.firebaseapp.com",
  databaseURL: "https://abbas-4f15e.firebaseio.com",
  projectId: "abbas-4f15e",
  storageBucket: "abbas-4f15e.appspot.com",
  messagingSenderId: "16069545327",
  appId: "1:16069545327:web:c98ce26309c38e4a2b6c9a"
};

fs.initializeApp(firebaseConfig);

export default fs;