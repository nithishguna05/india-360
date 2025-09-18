import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email and password match
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      // Save logged-in user
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login Successful ✅");
      navigate("/"); // redirect to homepage
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            placeholder="Email"
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

          <div className="flex justify-between items-center">
            <button className="px-4 py-2 bg-[var(--primary)] text-white rounded">
              Login
            </button>
            <Link to="#" className="text-sm">
              Forgot?
            </Link>
          </div>
        </form>

        <p className="text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[var(--primary)] underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
