import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Overview from "./pages/Overview";
import Appointments from "./pages/Appointments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import PredictionHistory from "./pages/PredictionHistory";
import GrowthTracker from "./pages/GrowthTracker";
import Medications from "./pages/Medications";
import Emergency from "./pages/Emergency";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import DashboardLayout from "./layouts/DashboardLayout";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Home from "./pages/Home";
import SymptomChecker from "./pages/SymptomChecker";
import Vaccination from "./pages/Vaccination";


function ProtectedRoute({ children }) {
  
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {

    return <Navigate to="/" replace />;
  }

  return children;
}

function Dashboard() {

  const [activePage, setActivePage] = useState("overview");

  return (
    <DashboardLayout>
      <Toaster position="top-right" />
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />
      
      <div className="flex-1 p-6 md:p-10 overflow-y-auto min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-purple-50">

        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl"></div>

        <motion.div
  key={activePage}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="relative z-10"
>

          <Topbar activePage={activePage} />

          {activePage === "overview" && (
            <>
              <Overview setActivePage={setActivePage} /> 

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >

                <Home />

              </motion.div>

            </>
          )}

          {activePage === "symptoms" && (
            <SymptomChecker />
          )}

          {activePage === "vaccinations" && (
            <Vaccination />
          )}

          {activePage === "appointments" && (
            <Appointments />
          )}
          
          {activePage === "history" && (
  <PredictionHistory />
)}

{activePage === "growth" && (
  <GrowthTracker />
)}

{activePage === "medications" && (
  <Medications />
)}

{activePage === "emergency" && (
  <Emergency />
)}

          {activePage === "reports" && (
            <Reports />
          )}

          {activePage === "settings" && (
            <Settings />
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 2
            }}
            className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-3xl shadow-2xl z-50 floating-glow"
          >

            +

          </motion.button>

          <div className="mt-20 text-center text-gray-400 text-sm pb-10">

            © 2026 KidoDoc AI — Smart Pediatric Healthcare Platform

          </div>

        </motion.div>

      </div>

    </DashboardLayout>

  );
}
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;