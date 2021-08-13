import './App.css';
// Firebase
import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// import './config/firebase-config'

//google sign on functions
import "./google-signin"

//States for react
import { useEffect, useState } from 'react';

import { firebaseConfig } from "./config/firebase-config.js"
import { functionHome } from "./home.js"

//
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Firestore data connection
var db = firebase.firestore();

var userCredGlobal = '';

//Main function
function App() {

    const [auth, setAuth] = useState(
    		false || window.localStorage.getItem('auth') === 'true'
  	);
    const [token, setToken] = useState('');

  	useEffect(() => {
  		firebase.auth().onAuthStateChanged((userCred) => {
  			if (userCred) {
  				setAuth(true);
  				window.localStorage.setItem('auth', 'true');
  				userCred.getIdToken().then((token) => {
  					setToken(token);
  				});
  			}
  		});
  	}, []);

  	const loginWithGoogle = () => {
      // return // Allows to access data
  		firebase
  			.auth()
  			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  			.then((userCred) => {
          console.log(userCred);
  				if (userCred) {
  					setAuth(true);
  					window.localStorage.setItem('auth', 'true');
  				}
          console.log(userCred.additionalUserInfo.profile.id);
          userCredGlobal = userCred;

            //Add Information to Database
            // db.collection("users").doc(userCred.additionalUserInfo.profile.id).set({
            //     name: userCred.additionalUserInfo.profile.name,
            //     email: userCred.additionalUserInfo.profile.email
            // })
            var checkDBUser = db.collection("users").doc(userCred.additionalUserInfo.profile.id);

            checkDBUser.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document! Creating new entry in database");
                    // Insert new record for person that doesn't already exist
                    db.collection("users").doc(userCred.additionalUserInfo.profile.id).set({
                      name: userCred.additionalUserInfo.profile.name,
                      email: userCred.additionalUserInfo.profile.email
                    })
                    .then((docRef) => {
                        console.log("Document written with ID: ", userCred.additionalUserInfo.profile.id);
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

  			});
  	};

// Works
     const SignOutGoogle = () => {
        firebase
        .auth()
        .signOut()
        .then(() => {
            setAuth(false);
            window.localStorage.setItem('auth', 'false');
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        })
      };


  	return (
  		<div className="App">
      {auth ? (
        <div>
          <button onClick={SignOutGoogle}>Sign Out</button>
        </div>
      ):(
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
  		</div>
  	);
}

export default App;
