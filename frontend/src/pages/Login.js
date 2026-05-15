import toast from "react-hot-toast";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  useEffect(() => {

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn) {

    navigate("/dashboard");

  }

}, [navigate]);

 const handleLogin = () => {

  if (!email || !password) {

    setError("All fields are required");
    return;

  }

  localStorage.setItem("isLoggedIn", "true");

  toast.success("Login successful");

  navigate("/dashboard");

};

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-100"
      >

        <div className="text-center mb-8">

          <h1 className="text-5xl font-bold text-blue-800">
            KidoDoc AI
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Pediatric Healthcare Assistant
          </p>

        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-100 mb-5"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-100 mb-6"
        />

        {error && (

          <p className="text-red-500 text-sm mb-4 font-medium">
            {error}
          </p>

        )}

        <button
          onClick={handleLogin}
          disabled={false}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:opacity-90 transition-all duration-300 text-white py-4 rounded-2xl font-bold text-lg shadow-lg disabled:opacity-60"
        >

          Login

        </button>

        <p className="text-center mt-6 text-gray-500">

          Don't have an account?

          <Link
            to="/signup"
            className="text-blue-700 font-semibold ml-2 hover:text-purple-700 transition duration-300"
          >

            Sign Up

          </Link>

        </p>

      </motion.div>

    </div>

  );
}

export default Login;