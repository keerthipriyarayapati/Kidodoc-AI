import { motion } from "framer-motion";

function Emergency() {

  return (

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-red-100 border border-red-300 rounded-3xl p-10 shadow-lg"
    >

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

        <h2 className="text-5xl font-bold text-red-700">
          Emergency Support
        </h2>

        <div className="bg-red-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg">

          24/7 Active Monitoring

        </div>

      </div>

      <p className="text-red-700 text-xl leading-relaxed">

        If your child experiences severe breathing difficulty,
        unconsciousness, seizures, persistent high fever,
        or emergency symptoms, immediately contact emergency services.

      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <button className="bg-red-600 hover:scale-105 hover:bg-red-700 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-bold text-lg">

          Call Emergency

        </button>

        <button className="bg-white hover:scale-105 transition-all duration-300 text-red-700 border border-red-400 px-8 py-4 rounded-2xl font-bold text-lg">

          Find Nearby Hospital

        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

        <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 p-8 flex flex-col justify-between min-h-[280px]">

          <div>

            <h3 className="text-3xl font-bold text-red-700 mb-4">
              Ambulance
            </h3>

            <p className="text-gray-500 text-lg leading-relaxed">
              Immediate emergency response and rapid medical assistance.
            </p>

          </div>

          <button className="mt-8 bg-red-600 hover:scale-105 hover:bg-red-700 transition-all duration-300 text-white px-6 py-4 rounded-2xl font-semibold w-full">

            Call 108

          </button>

        </div>

        <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 p-8 flex flex-col justify-between min-h-[280px]">

          <div>

            <h3 className="text-3xl font-bold text-blue-700 mb-4">
              Pediatrician
            </h3>

            <p className="text-gray-500 text-lg leading-relaxed">
              Contact child specialist for urgent pediatric consultation.
            </p>

          </div>

          <button className="mt-8 bg-blue-600 hover:scale-105 hover:bg-blue-700 transition-all duration-300 text-white px-6 py-4 rounded-2xl font-semibold w-full">

            Contact Doctor

          </button>

        </div>

        <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 p-8 flex flex-col justify-between min-h-[280px]">

          <div>

            <h3 className="text-3xl font-bold text-green-700 mb-4">
              Poison Control
            </h3>

            <p className="text-gray-500 text-lg leading-relaxed">
              Emergency toxicology assistance and poisoning support.
            </p>

          </div>

          <button className="mt-8 bg-green-600 hover:scale-105 hover:bg-green-700 transition-all duration-300 text-white px-6 py-4 rounded-2xl font-semibold w-full">

            Emergency Help

          </button>

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 p-10 mt-10">

        <h2 className="text-3xl font-bold text-red-700 mb-8">
          Emergency Safety Instructions
        </h2>

        <div className="space-y-5 text-lg text-gray-700">

          <p>
            • Keep emergency medical numbers accessible at all times.
          </p>

          <p>
            • Monitor breathing patterns during high fever episodes.
          </p>

          <p>
            • Never administer medications without pediatric guidance.
          </p>

          <p>
            • Ensure child hydration during emergency situations.
          </p>

          <p>
            • Seek immediate care if symptoms worsen rapidly.
          </p>

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 p-10 mt-10">

        <h2 className="text-3xl font-bold text-red-700 mb-8">
          Emergency Preparedness Checklist
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-red-50 p-6 rounded-2xl">

            <h3 className="text-xl font-bold text-red-700 mb-3">
              Medical Essentials
            </h3>

            <p className="text-gray-600">
              Keep first aid kits, medications, and emergency contacts accessible.
            </p>

          </div>

          <div className="bg-blue-50 p-6 rounded-2xl">

            <h3 className="text-xl font-bold text-blue-700 mb-3">
              Hospital Access
            </h3>

            <p className="text-gray-600">
              Know nearest pediatric emergency hospitals and travel routes.
            </p>

          </div>

          <div className="bg-green-50 p-6 rounded-2xl">

            <h3 className="text-xl font-bold text-green-700 mb-3">
              Child Safety
            </h3>

            <p className="text-gray-600">
              Monitor hydration, breathing, and temperature regularly.
            </p>

          </div>

          <div className="bg-yellow-50 p-6 rounded-2xl">

            <h3 className="text-xl font-bold text-yellow-700 mb-3">
              Emergency Response
            </h3>

            <p className="text-gray-600">
              Seek immediate medical help if symptoms worsen rapidly.
            </p>

          </div>

        </div>

      </div>

    </motion.div>

  );
}

export default Emergency;