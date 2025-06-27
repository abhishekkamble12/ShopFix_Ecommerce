import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button"
import { Button } from "bootstrap";
import axios from "axios";
function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", form);
    alert("Signup successful!");
    axios.post("http://localhost:5000/api/signup", form)
    .then((response) =>{
      console.log("Signup response:", response.data);
      alert("Signup successful!");
      // Optionally redirect or clear form
      setForm({ name: "", email: "", password: "" });
    })
  };

  return (
    <div className="w-full  h-[60vh] flex justify-center align-middle items-center max-w-md relative top-30  left-[40pc] bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 rounded bg-gray-700 text-white"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        
        
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
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded"  >
          Sign Up
        </button>
      </form>
      <p className="text-sm mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-yellow-400 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}

export default Signup;
