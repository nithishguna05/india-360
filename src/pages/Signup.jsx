import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirm) {
      setError("All fields are required");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      setError("Email already registered. Try logging in.");
      return;
    }

    // Save new user
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account Created Successfully ✅");
    nav("/login");
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form className="space-y-4" onSubmit={handleSignup}>
          <input
            placeholder="Full Name"
            className="w-full p-3 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            className="w-full p-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            className="w-full p-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            className="w-full p-3 border rounded"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button className="w-full px-4 py-2 bg-[var(--primary)] text-white rounded">
            Sign Up
          </button>
        </form>

        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[var(--primary)] underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
