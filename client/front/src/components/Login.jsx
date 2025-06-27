import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
    alert("Login successful!");
  };

  return (
    <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-700 text-white"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-700 text-white"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded">
          Log In
        </button>
      </form>
      <p className="text-sm mt-4 text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-yellow-400 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
