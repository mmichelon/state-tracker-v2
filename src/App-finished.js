import './App.css';

// Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect, useState } from 'react';

import "./google-signin.js"

//Main function
function App() {

  // const [auth, setAuth] = useState(
  // 		false || window.localStorage.getItem('auth') === 'true'
  // 	);
  // 	const [token, setToken] = useState('');
  //
  // 	useEffect(() => {
  // 		firebase.auth().onAuthStateChanged((userCred) => {
  // 			if (userCred) {
  // 				setAuth(true);
  // 				window.localStorage.setItem('auth', 'true');
  // 				userCred.getIdToken().then((token) => {
  // 					setToken(token);
  // 				});
  // 			}
  // 		});
  // 	}, []);

  	const loginWithGoogle = () => {
  		firebase
  			.auth()
  			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  			.then((userCred) => {
  				if (userCred) {
  					setAuth(true);
  					window.localStorage.setItem('auth', 'true');
  				}
  			});
  	};

  	return (
  		<div className="App">
  			// {auth ? (
          // <h1>Todos</h1>
  				// <ListOfTodo token={token} />
  			// ) : (
  				<button onClick={loginWithGoogle}>Login with Google</button>
  			// )}
  		</div>
  	);
}

export default App;
