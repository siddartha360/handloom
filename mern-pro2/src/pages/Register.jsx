import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      console.log("Backend response:", data); // ✅ useful for debug

      if (!res.ok) {
        setError(data.msg || "Registration failed");
        return;
      }

      localStorage.setItem("token", data.token);
      alert("✅ Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error("Error during registration:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        onSubmit={handleRegister}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ margin: "10px 0", padding: "8px" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "10px 0", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "10px 0", padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "green",
            color: "white",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Login
        </span>
      </p>
    </div>
  );
}
