import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useState } from "react";

function Settings() {
  const [parentName, setParentName] = useState("");
const [email, setEmail] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const handleSave = () => {
  setLoading(true);
  if (!parentName || !email) {
    setLoading(false);
    setError("All fields are required");
    return;

  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    setLoading(false);
    setError("Enter a valid email address");
    return;

  }

  setError("");
  setLoading(false);
  toast.success("Settings saved successfully");

};
  return (

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mt-10"
    >

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

        <h2 className="text-4xl font-bold text-blue-800">
          Settings
        </h2>

        <button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:opacity-90 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg">

          Save Preferences

        </button>

      </div>

      <div className="space-y-5 mb-10">

        <div>

          <label className="block text-gray-500 mb-2">
            Parent Name
          </label>

          <input
  type="text"
  placeholder="Enter parent name"
  value={parentName}
  onChange={(e) => setParentName(e.target.value)}
  className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
/>

        </div>

        <div>

          <label className="block text-gray-500 mb-2">
            Email
          </label>

          <input
  type="email"
  placeholder="Enter email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
/>

        </div>
{error && (

  <p className="text-red-500 text-sm font-medium">
    {error}
  </p>

)}
        <button
  onClick={handleSave}
  disabled={loading}
  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-105 hover:opacity-90 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg">

          {loading ? "Saving..." : "Save Changes"}

        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        <div className="bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-3xl shadow-lg border border-gray-100 p-8">

          <h3 className="text-3xl font-bold text-blue-800 mb-6">
            Account Information
          </h3>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Parent Name"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-100"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-100"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-blue-100"
            />

          </div>

        </div>

        <div className="bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-3xl shadow-lg border border-gray-100 p-8">

          <h3 className="text-3xl font-bold text-purple-800 mb-6">
            Healthcare Preferences
          </h3>

          <div className="space-y-5">

            <div className="flex items-center justify-between">

              <span className="text-lg text-gray-700">
                Vaccination Reminders
              </span>

              <input type="checkbox" defaultChecked />

            </div>

            <div className="flex items-center justify-between">

              <span className="text-lg text-gray-700">
                AI Prediction Alerts
              </span>

              <input type="checkbox" defaultChecked />

            </div>

            <div className="flex items-center justify-between">

              <span className="text-lg text-gray-700">
                Emergency Notifications
              </span>

              <input type="checkbox" defaultChecked />

            </div>

          </div>

        </div>

      </div>

      <div className="bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-3xl shadow-lg border border-gray-100 p-10 mb-10">

        <h2 className="text-3xl font-bold text-red-700 mb-8">
          Security Settings
        </h2>

        <div className="space-y-6">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-xl font-bold text-gray-800">
                Two-Factor Authentication
              </h3>

              <p className="text-gray-500 mt-1">
                Add additional account protection.
              </p>

            </div>

            <button className="bg-red-600 hover:scale-105 hover:bg-red-700 transition-all duration-300 text-white px-5 py-3 rounded-2xl font-semibold">

              Enable

            </button>

          </div>

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-xl font-bold text-gray-800">
                Device Sessions
              </h3>

              <p className="text-gray-500 mt-1">
                Manage logged-in devices.
              </p>

            </div>

            <button className="bg-blue-600 hover:scale-105 hover:bg-blue-700 transition-all duration-300 text-white px-5 py-3 rounded-2xl font-semibold">

              Manage

            </button>

          </div>

        </div>

      </div>

      <div className="bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-3xl shadow-lg border border-gray-100 p-10 mb-10">

        <h2 className="text-3xl font-bold text-green-700 mb-8">
          Notification Preferences
        </h2>

        <div className="space-y-6">

          <div className="flex items-center justify-between">

            <span className="text-lg text-gray-700">
              Medication Reminders
            </span>

            <input type="checkbox" defaultChecked />

          </div>

          <div className="flex items-center justify-between">

            <span className="text-lg text-gray-700">
              Appointment Alerts
            </span>

            <input type="checkbox" defaultChecked />

          </div>

          <div className="flex items-center justify-between">

            <span className="text-lg text-gray-700">
              Emergency Notifications
            </span>

            <input type="checkbox" defaultChecked />

          </div>

          <div className="flex items-center justify-between">

            <span className="text-lg text-gray-700">
              Weekly Health Reports
            </span>

            <input type="checkbox" defaultChecked />

          </div>

        </div>

      </div>

    </motion.div>

  );
}

export default Settings;