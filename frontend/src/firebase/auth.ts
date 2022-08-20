import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "./app";

const firebaseAuth = getAuth(firebaseApp);
firebaseAuth.useDeviceLanguage();
const googleAuthProvider = new GoogleAuthProvider();

export { firebaseAuth, googleAuthProvider };
