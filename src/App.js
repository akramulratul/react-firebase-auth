import "./App.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "./Firebase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const handleGoogleSignIn = () => {
  signInWithPopup(auth, googleProvider).then((res) => {
    const user = res.user;
    console.log(user);
  });
};

const handleRegistration = (e) => {
  e.preventDefault();
  console.log("registration");
};
function App() {
  return (
    <div className="App">
      <form onSubmit={handleRegistration}>
        <h3>Please Register</h3>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
        <br />
        <label htmlFor="email">Pass:</label>
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Register" />
      </form>
      <br />
      <br />
      <button onClick={handleGoogleSignIn}>Google sign in</button>
      <button onClick={handleGoogleSignIn}>Google sign in</button>
      <button onClick={handleGoogleSignIn}>Google sign in</button>
      <button onClick={handleGoogleSignIn}>Google sign in</button>
    </div>
  );
}

export default App;
