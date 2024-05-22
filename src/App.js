import React, { useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        {user ? (
          <>
            <h2>Welcome, {user.displayName}</h2>
            <button onClick={signOutUser}>Sign Out</button>
          </>
        ) : (
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        )}
      </header>
    </div>
  );
}

export default App;
/*
React, { useState }: Importing React and the useState hook to manage state within the component.
auth, provider: Importing the auth and provider instances from the firebase module you configured.
signInWithPopup, signOut: Importing authentication functions from Firebase. signInWithPopup is used for signing in with a popup, and signOut is for signing out.
./App.css: Importing CSS for styling the component.
App: This is the main functional component of the application.
useState(null): Initializes a state variable user to null. This will hold the current user’s information when they sign in.
signInWithGoogle: A function that triggers the Google sign-in process.
signInWithPopup(auth, provider): Opens a popup for Google sign-in. If successful, it returns a result with user information.
.then((result) => { setUser(result.user); }): Sets the user state to the signed-in user's information.
.catch((error) => { console.error("Error signing in with Google: ", error); }): Logs any errors that occur during sign-in.
signOutUser: A function that triggers the sign-out process.
signOut(auth): Signs out the currently authenticated user.
.then(() => { setUser(null); }): Resets the user state to null upon successful sign-out.
.catch((error) => { console.error("Error signing out: ", error); }): Logs any errors that occur during sign-out.
return: The component's render method.
<div className="App">: Main container div with a class for styling.
<header className="App-header">: Header section of the app.
Conditional Rendering:
{user ? (...) : (...)}: If a user is signed in (user is not null), display a welcome message with the user’s display name and a "Sign Out" button.
If no user is signed in (user is null), display a "Sign In with Google" button.
export default App: Exports the App component as the default export, allowing it to be imported and used in other parts of the application.
*/
