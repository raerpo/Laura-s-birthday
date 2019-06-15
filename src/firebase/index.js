import app from 'firebase/app';
import 'firebase/database'

const config = {
  apiKey: "AIzaSyCAUiPa4_0Fs4-Rj2dJI5QgFl96rY5cC-8",
  authDomain: "laura1up.firebaseapp.com",
  databaseURL: "https://laura1up.firebaseio.com",
  projectId: "laura1up",
  storageBucket: "laura1up.appspot.com",
  messagingSenderId: "883837473045",
  appId: "1:883837473045:web:5a4f5fc58ae69ffe"
};

const firebaseApp = app.initializeApp(config);

export default firebaseApp;