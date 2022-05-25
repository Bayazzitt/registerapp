import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA-EZSYKThCZs8Mi9wnnPqgcr_f79d3WoA",
    authDomain: "kayitsistemi-87108.firebaseapp.com",
    projectId: "kayitsistemi-87108",
    storageBucket: "kayitsistemi-87108.appspot.com",
    messagingSenderId: "548998815274",
    appId: "1:548998815274:web:63d26105f0979c86a6ed53",
    measurementId: "G-7K8FFT580D"
  };



  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)
