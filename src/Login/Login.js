import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "firebase/auth"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        setSuccess("Login successful");
        setError("");
        navigate("/gallery");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError(`Error signing in Kindly confirm your details`);
      console.error(error);
    }
  };
  
  return (
    <div className="login--background">
      <div className="login--text">
        <h2>Login</h2>
        <p>{success}</p>
      </div>
      <div className="input--block">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login--update">
          {error && <p className="red">{error}</p>}
        </div>
        <button onClick={handleLogin} className="btn btn--pink">
          Go to gallery
        </button>
      </div>
    </div>
  );
}

export default Login;



