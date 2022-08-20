import { onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { firebaseAuth, googleAuthProvider } from "../firebase/auth";

function SignInOutButton() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);

  useEffect(() => {
    return onAuthStateChanged(firebaseAuth, (user) => {
      if (user !== null) {
        setIsAuthenticated(true);
        setDisplayName(user.displayName);
        setPhotoURL(user.photoURL);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);

  if (isAuthenticated) {
    return (
      <button className="signOutButton" onClick={() => signOut(firebaseAuth)}>
        Sair {displayName && `(${displayName})`}
        {photoURL && <img src={photoURL} alt={displayName || ""} />}
      </button>
    );
  } else {
    return (
      <button
        className="signInButton"
        onClick={() => signInWithRedirect(firebaseAuth, googleAuthProvider)}
      >
        Entrar
      </button>
    );
  }
}

export default SignInOutButton;
