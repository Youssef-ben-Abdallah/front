import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp ({
apiKey: "AIzaSyByutgm7sVENVafMPx_lFmkM6ZmOITM0ow",
authDomain: "smma-4a10e.firebaseapp.com",
projectId: "smma-4a10e",
storageBucket: "smma-4a10e.appspot.com",
messagingSenderId: "37389530859",
appId: "1:37389530859:web:bc01d268572d612496b0ae",
});
// Firebase storage reference
const storage = getStorage(app);
export default storage;