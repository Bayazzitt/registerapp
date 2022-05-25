import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="container">
      <form>
      <div className="form-outline mb-4">
        <h3> Register User </h3>
        <input type="email" id="form2Example1" className="form-control mt-3"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input type="email" id="form2Example1" className="form-control mt-3"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button type="button" className="btn btn-primary btn-block mt-3" onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input type="email" id="form2Example1" className="form-control mt-3"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input type="email" id="form2Example1" className="form-control mt-3"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button type="button" className="btn btn-primary btn-block mt-3" onClick={login}> Login</button>
      </div>

      <h4 className="mt-3"> User Logged In : {user?.email} </h4>
      
      <button type="button" className="btn btn-primary btn-block mt-3" onClick={logout}> Sign Out </button>
      </form>
    </div>
  );
}

export default App;
