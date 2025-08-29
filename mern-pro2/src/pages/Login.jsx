import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login response:", data); // for debugging

      if (!res.ok) {
        setError(data.msg || "Invalid email or password");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("loggedInUser", JSON.stringify(data.user));

      alert("✅ Login successful!");
      navigate("/"); // redirect to homepage
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login Page 🔑</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        {/* Email Input */}
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px" }}
          required
        />

        {/* Password Input */}
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px" }}
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>

      <p>
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Register here
        </span>
      </p>
    </div>
  );
}
