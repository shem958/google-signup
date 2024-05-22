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
