import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    const validEmail = "user@example.com";
    const validPassword = "1Password";

    if (email === validEmail && password === validPassword) {
      setSuccess("Login successful");
      setError("");
      setAuthenticated(true);

      setTimeout(() => {
        setSuccess(""); 
        navigate("/gallery");
      }, 1000);

    } else {
      setError("Invalid email or password");
      setSuccess("");
      setAuthenticated(false);
    }
  };

  return (
    <div className="login--background">
      <div className="login--text">
        <h2>Login</h2>
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
          {success && <p className="green">{success}</p>}
          {authenticated && <p>{authenticated}</p>}
        </div>
        <button onClick={handleLogin} className="btn btn--pink">
            Go to gallery
        </button>
      </div>
     
    </div>
  );
}

export default Login;
