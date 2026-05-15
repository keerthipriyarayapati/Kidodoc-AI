import { motion } from "framer-motion";

function Home() {

  return (

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 p-8 mt-10"
    >

      <h1 className="text-5xl font-bold text-blue-800 mb-4">
        KidoDoc AI
      </h1>

      <p className="text-gray-500 text-xl mb-6">
        AI-powered Pediatric Symptom Checker
      </p>

      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-3xl mt-6 shadow-lg">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">

          <div>

            <h2 className="text-2xl font-bold">
              Daily Health Overview
            </h2>

            <p className="mt-2 text-green-100">
              Child health status is currently stable with no critical alerts.
            </p>

          </div>

          <div className="mt-6 md:mt-0">

            <div className="bg-white text-green-700 px-6 py-3 rounded-xl font-bold shadow-md">
              Stable Condition
            </div>

          </div>

        </div>

      </div>

      <div className="bg-blue-100 p-5 rounded-2xl mt-6">

        <p className="text-blue-800 text-lg">
          Helping parents monitor symptoms, track vaccinations,
          and receive preliminary child healthcare guidance.
        </p>

      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-3xl p-8 mt-10 shadow-xl">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">

          <div>

            <h2 className="text-3xl font-bold">
              Child Profile
            </h2>

            <p className="mt-3 text-blue-100">
              Monitor your child’s health records, symptoms,
              and vaccination progress in one place.
            </p>

          </div>

          <div className="mt-6 md:mt-0">

            <div className="bg-white text-blue-800 px-6 py-3 rounded-xl font-bold shadow-md">
              Active Monitoring
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-blue-100 p-6 rounded-3xl shadow-md"
        >

          <h3 className="text-blue-800 font-bold text-xl">
            Symptom Checks
          </h3>

          <p className="text-blue-800 mt-2 text-4xl font-bold">
            12
          </p>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-purple-100 p-6 rounded-3xl shadow-md"
        >

          <h3 className="text-purple-800 font-bold text-xl">
            Vaccinations
          </h3>

          <p className="text-purple-700 mt-2 text-4xl font-bold">
            5
          </p>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-green-100 p-6 rounded-3xl shadow-md"
        >

          <h3 className="text-green-800 font-bold text-xl">
            Health Status
          </h3>

          <p className="text-green-700 mt-2 text-3xl font-bold">
            Stable
          </p>

        </motion.div>

      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8 mt-10">

        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Child Health Tips
        </h2>

        <div className="space-y-4">

          <div className="bg-blue-100 p-4 rounded-xl">
            Ensure your child stays hydrated throughout the day.
          </div>

          <div className="bg-purple-100 p-4 rounded-xl">
            Maintain vaccination schedules regularly.
          </div>

          <div className="bg-green-100 p-4 rounded-xl">
            Consult a pediatrician if symptoms persist.
          </div>

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8 mt-10">

        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Recent Health Activity
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between items-center bg-blue-100 p-4 rounded-xl">

            <div>

              <h3 className="font-bold text-blue-800">
                Symptom Check Completed
              </h3>

              <p className="text-blue-600">
                Fever and cough symptoms analyzed.
              </p>

            </div>

            <span className="text-blue-800 font-semibold">
              Today
            </span>

          </div>

          <div className="flex justify-between items-center bg-purple-100 p-4 rounded-xl">

            <div>

              <h3 className="font-bold text-purple-800">
                Vaccination Updated
              </h3>

              <p className="text-purple-600">
                MMR vaccine marked completed.
              </p>

            </div>

            <span className="text-purple-700 font-semibold">
              Yesterday
            </span>

          </div>

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8 mt-10">

        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Parent Notes
        </h2>

        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl p-8 mb-8 shadow-xl">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">

            <div>

              <h2 className="text-3xl font-bold">
                KidoDoc AI Assistant
              </h2>

              <p className="mt-3 text-purple-100">
                Receive AI-assisted guidance for symptoms,
                vaccination schedules, and pediatric care support.
              </p>

            </div>

            <button className="mt-6 md:mt-0 bg-white text-purple-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-md">

              Start AI Chat

            </button>

          </div>

        </div>

        <textarea
          placeholder="Write important health observations, symptoms, or reminders..."
          className="w-full h-40 p-5 border border-gray-300 rounded-3xl resize-none focus:outline-none focus:ring-4 focus:ring-blue-100"
        ></textarea>

        <button className="mt-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-105 hover:opacity-90 transition-all duration-300 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">

          Save Notes

        </button>

      </div>

    </motion.div>

  );
}

export default Home;