import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    // Admin Login
    if (role === "admin") {
      if (username === "adm" && password === "adm") {
        localStorage.setItem("role", "admin");
        navigate("/admin");
      } else {
        alert("Invalid Admin Credentials");
      }
    }

    // User Login
    if (role === "user") {
    if (username === "user" && password === "user") {
        localStorage.setItem("role", "user");
      navigate("/user");
    } else {
      alert("Invalid User Credentials");
    }
  }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded shadow w-96">

        <h1 className="text-xl font-bold text-center mb-4">
          Library Management System
        </h1>

        <input
          type="text"
          placeholder="User ID"
          className="border p-2 w-full mb-3"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-around mb-4">
          <label>
            <input
              type="radio"
              checked={role === "user"}
              onChange={() => setRole("user")}
            />
            <span className="ml-1">User</span>
          </label>

          <label>
            <input
              type="radio"
              checked={role === "admin"}
              onChange={() => setRole("admin")}
            />
            <span className="ml-1">Admin</span>
          </label>
        </div>

        <div className="flex justify-between">
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded"
            onClick={() => {
              setUsername("");
              setPassword("");
            }}
          >
            Cancel
          </button>

          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}