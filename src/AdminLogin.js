import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from './firebase';

function AdminLogin() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 const [error, setError] = useState(null);

 const handleLogin = (e) => {
    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        navigate("/dashboard/home"); 
      })
      .catch((error) => {
        setError(error.message);
      });
 };
 const handleSignup = () => {
    navigate("/AdminSignup");
 };

 return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      <button onClick={handleSignup}>Don't have an account? Create one here</button>
      </form>
    </div>
  );
}

export default AdminLogin;
