import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAjddB955SJ5XMYOSmrbs4NwW4YwwAG_B4",
	authDomain: "cg-playground-3b288.firebaseapp.com",
	projectId: "cg-playground-3b288",
	storageBucket: "cg-playground-3b288.appspot.com",
	messagingSenderId: "501169668993",
	appId: "1:501169668993:web:b472e867009abb191d9e80"
  };

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);
const db = getFirestore();
const storage = getStorage();

export { auth, firestore, app, storage,db };
