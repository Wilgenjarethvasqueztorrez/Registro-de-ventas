import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB68iY9_j2nNSajScy8TU3mzQEMMa7R3Jo",
    authDomain: "bd-registro-de-ventas.firebaseapp.com",
    databaseURL: "https://bd-registro-de-ventas-default-rtdb.firebaseio.com",
    projectId: "bd-registro-de-ventas",
    storageBucket: "bd-registro-de-ventas.firebasestorage.app",
    messagingSenderId: "52957839366",
    appId: "1:52957839366:web:b03bc3b5493a520534c387"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export default app;
