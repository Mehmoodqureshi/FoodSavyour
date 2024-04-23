import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from './firebase';
import "./AdminLogin.css";

function SignUp() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 const [error, setError] = useState(null);

 const handleSignup = (e) => {
  e.preventDefault();

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      navigate("/admin-login")
    })
    .catch((error) => {
      setError(error.message);
    });
};
 const handleLogin = () => {
    navigate("/admin-login")
 }

 return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
        <button onClick={handleLogin}>Already have an account?Log In</button>
      </form>
    </div>
 );
}

export default SignUp;
