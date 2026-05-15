import { motion } from "framer-motion";
function Appointments() {

  return (

    <motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mt-10"
>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

        <h2 className="text-4xl font-bold text-orange-700">
          Appointments
        </h2>

        <button className="mt-4 md:mt-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 hover:opacity-90 transition-all duration-300">

          Book Appointment

        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-orange-100 p-8 rounded-3xl">

          <h3 className="text-orange-800 text-2xl font-bold">
            Total Visits
          </h3>

          <p className="text-5xl font-bold text-orange-700 mt-4">
            14
          </p>

        </div>

        <div className="bg-green-100 p-8 rounded-3xl">

          <h3 className="text-green-800 text-2xl font-bold">
            Completed
          </h3>

          <p className="text-5xl font-bold text-green-700 mt-4">
            11
          </p>

        </div>

        <div className="bg-blue-100 p-8 rounded-3xl">

          <h3 className="text-blue-800 text-2xl font-bold">
            Upcoming
          </h3>

          <p className="text-5xl font-bold text-blue-700 mt-4">
            3
          </p>

        </div>

      </div>

      <div className="space-y-6 mb-10">

        <div className="bg-white border border-gray-100 shadow-lg p-6 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

          <h3 className="text-2xl font-bold text-blue-700">
            Pediatric Consultation
          </h3>

          <p className="text-gray-500 mt-3 text-lg">
            12 May 2026 — 10:00 AM
          </p>

          <div className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">

            Confirmed

          </div>

        </div>

        <div className="bg-white border border-gray-100 shadow-lg p-6 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

          <h3 className="text-2xl font-bold text-purple-700">
            Vaccination Follow-up
          </h3>

          <p className="text-gray-500 mt-3 text-lg">
            18 May 2026 — 2:30 PM
          </p>

          <div className="mt-4 inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl font-semibold">

            Upcoming

          </div>
          

        </div>
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 shadow-md rounded-3xl p-6 mb-10">

  <h2 className="text-2xl font-bold text-yellow-800">
    Upcoming Reminder
  </h2>

  <p className="text-yellow-700 mt-3 text-lg">

    Next pediatric consultation scheduled in 2 days.

  </p>

</div>

      </div>
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-10 mt-10 shadow-2xl">

  <h2 className="text-3xl font-bold mb-6">
    AI Appointment Insights
  </h2>

  <div className="space-y-4 text-lg">

    <p>
      • Appointment consistency remains healthy.
    </p>

    <p>
      • No missed pediatric consultations detected recently.
    </p>

    <p>
      • AI monitoring recommends maintaining regular checkups.
    </p>

    <p>
      • Upcoming consultations align with vaccination schedules.
    </p>

  </div>

</div>
<div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mt-10">

  <h2 className="text-3xl font-bold text-blue-700 mb-8">
    Available Pediatricians
  </h2>

  <div className="space-y-6">

    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-blue-50 p-6 rounded-2xl">

      <div>

        <h3 className="text-2xl font-bold text-blue-800">
          Dr. Priya Sharma
        </h3>

        <p className="text-blue-600 mt-2">
          Pediatric Specialist • 10 Years Experience
        </p>

      </div>

      <button className="mt-5 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold">

        Schedule

      </button>

    </div>

    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-green-50 p-6 rounded-2xl">

      <div>

        <h3 className="text-2xl font-bold text-green-800">
          Dr. Rahul Verma
        </h3>

        <p className="text-green-600 mt-2">
          Child Healthcare Expert • 8 Years Experience
        </p>

      </div>

      <button className="mt-5 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold">

        Schedule

      </button>

    </div>

  </div>

</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

  <div className="bg-green-100 p-8 rounded-3xl">

    <h3 className="text-green-800 text-2xl font-bold hover:shadow-xl transition-all duration-300">
      Attendance Rate
    </h3>

    <p className="text-5xl font-bold text-green-700 mt-4">
      96%
    </p>

  </div>

  <div className="bg-blue-100 p-8 rounded-3xl">

    <h3 className="text-blue-800 text-2xl font-bold hover:shadow-xl transition-all duration-300">
      Consultation Success
    </h3>

    <p className="text-5xl font-bold text-blue-700 mt-4">
      91%
    </p>

  </div>

  <div className="bg-purple-100 p-8 rounded-3xl">

    <h3 className="text-purple-800 text-2xl font-bold hover:shadow-xl transition-all duration-300">
      AI Scheduling
    </h3>

    <p className="text-5xl font-bold text-purple-700 mt-4">
      Active
    </p>

  </div>

</div>
<div className="text-center text-gray-400 text-sm mt-16">

  Appointment schedules and availability may change based on hospital and pediatrician availability.

</div>

    </motion.div>

  );
}

export default Appointments;