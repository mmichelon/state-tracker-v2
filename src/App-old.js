import logo from './logo.svg';
import './App.css';

// Firebase
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCySA6SaLB4Vf6vs4jXt2-MSi_NvOQpCzc",
  authDomain: "state-tracker-6843f.firebaseapp.com",
  databaseURL: "https://state-tracker-6843f-default-rtdb.firebaseio.com",
  projectId: "state-tracker-6843f",
  storageBucket: "state-tracker-6843f.appspot.com",
  messagingSenderId: "595171788081",
  appId: "1:595171788081:web:abedcb776cbb29a3f71c10",
  measurementId: "G-6Z9JGLEYCX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Firebase authentication
var provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

//Main function
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        <h1>Hello World</h1>
        </div>
      </header>
    </div>

  );
}

export default App;
