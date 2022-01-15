import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDg-V2zadFHmRLCzt8yfuXPSM6seqqvXQE",
    authDomain: "sunlover-cfe53.firebaseapp.com",
    projectId: "sunlover-cfe53",
    storageBucket: "sunlover-cfe53.appspot.com",
    messagingSenderId: "170559061076",
    appId: "1:170559061076:web:d49cc46c18b76265b601c1"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)