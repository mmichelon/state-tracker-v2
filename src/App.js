import './App.css';
// Firebase
import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// import './config/firebase-config'


//States for react
import { useEffect, useState } from 'react';

import { firebaseConfig } from "./config/firebase-config.js"

import { initStatesFun, getStates, initStatesHighestLevel } from "./initstates.js"

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
          // console.log(userCred.additionalUserInfo.profile.id);
          userCredGlobal = userCred;
          console.log("Global var")
          console.log(userCredGlobal.additionalUserInfo.profile.id);

  				if (userCred) {
  					setAuth(true);
  					window.localStorage.setItem('auth', 'true');
  				}


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
                    //Create entry in database for user
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

                    //Init States for user on creation
                    initStatesFun(userCred.additionalUserInfo.profile.id, db);
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
        // console.log(userCredGlobal);
        // console.log(userCredGlobal.additionalUserInfo.profile.id);
      };


      const getStatesConst = () => {
        getStates(userCredGlobal.additionalUserInfo.profile.id, db);
      };

      const initStatesHighestLevelConst = () => {
        initStatesHighestLevel(userCredGlobal.additionalUserInfo.profile.id, db);
      };
  	return (
  		<div className="App">
      {auth ? (
        <div>
          <button onClick={SignOutGoogle}>Sign Out</button>
          <button onClick={getStatesConst}>Display States</button>
          <button onClick={initStatesHighestLevelConst}>Init High Level States</button>

        </div>
      ):(
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
  		</div>
  	);
}

export default App;
