import { motion } from "framer-motion";
function Medications() {

  return (

    <motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8"
>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

  <h2 className="text-4xl font-bold text-orange-700">
    Medications
  </h2>

  <button className="mt-4 md:mt-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 hover:opacity-90 transition-all duration-300">

    Add Medication

  </button>
  
</div>
<div className="bg-orange-100 border border-orange-300 text-orange-800 px-6 py-4 rounded-2xl font-semibold mb-8">

  Medication schedule is active and reminders are enabled.

</div>

      <div className="space-y-5 mb-10">

        <div className="bg-orange-100 p-6 rounded-3xl flex justify-between items-center">

          <div>

            <h3 className="text-orange-800 text-2xl font-bold">
              Paracetamol Syrup
            </h3>

            <p className="text-orange-700 mt-2">
              5 ml after food
            </p>

          </div>

          <span className="text-orange-800 font-bold">
            8:00 PM
          </span>

        </div>

        <div className="bg-blue-100 p-6 rounded-3xl flex justify-between items-center">

          <div>

            <h3 className="text-blue-800 text-2xl font-bold">
              Vitamin D Drops
            </h3>

            <p className="text-blue-700 mt-2">
              Daily dosage reminder
            </p>

          </div>

          <span className="text-blue-800 font-bold">
            9:00 AM
          </span>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

  <div className="bg-orange-100 p-8 rounded-3xl">

    <h3 className="text-orange-800 text-2xl font-bold">
      Active Medicines
    </h3>

    <p className="text-5xl font-bold text-orange-700 mt-4">
      2
    </p>

  </div>
  <div className="bg-green-100 p-8 rounded-3xl">

    <h3 className="text-green-800 text-2xl font-bold">
      Completed Doses
    </h3>

    <p className="text-5xl font-bold text-green-700 mt-4">
      14
    </p>

  </div>
  

  <div className="bg-red-100 p-8 rounded-3xl">

    <h3 className="text-red-800 text-2xl font-bold">
      Missed Alerts
    </h3>

    <p className="text-5xl font-bold text-red-700 mt-4">
      1
    </p>

  </div>
</div>
      </div>
<div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

  <div className="flex items-center justify-between mb-6">

    <h2 className="text-3xl font-bold text-orange-700">
      Medication Adherence
    </h2>

    <span className="text-2xl font-bold text-green-600">
      94%
    </span>

  </div>

  <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">

    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-5 rounded-full w-[94%]"></div>

  </div>

  <p className="text-gray-500 mt-5">
    Medication adherence remains excellent this month.
  </p>

</div>
<div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-10 mb-10 shadow-2xl">

  <h2 className="text-3xl font-bold mb-6">
    AI Medication Insights
  </h2>


  <div className="space-y-4 text-lg">

    <p>
      • Medication consistency is currently stable.
    </p>

    <p>
      • No high-risk dosage conflicts detected.
    </p>

    <p>
      • Reminder compliance is above pediatric standards.
    </p>

    <p>
      • AI monitoring recommends continuing current schedule.
    </p>

  </div>
</div>
<div className="mt-10">

  <h2 className="text-3xl font-bold text-orange-700 mb-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
    Medication Schedule
  </h2>

  <div className="space-y-6">

    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between">

      <div>

        <h3 className="text-2xl font-bold text-orange-700">
          Paracetamol Syrup
        </h3>

        <p className="text-gray-500 mt-2">
          5ml after breakfast
        </p>

      </div>

      <div className="mt-4 md:mt-0">

        <span className="bg-green-100 text-green-700 px-5 py-2 rounded-xl font-semibold">
          Completed
        </span>

      </div>

    </div>
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between">

      <div>

        <h3 className="text-2xl font-bold text-orange-700">
          Vitamin D Drops
        </h3>

        <p className="text-gray-500 mt-2">
          2 drops before sleep
        </p>

      </div>

      <div className="mt-4 md:mt-0">

        <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-xl font-semibold">
          Pending
        </span>

      </div>

    </div>

  </div>

</div>
<div className="bg-red-50 border border-red-200 rounded-3xl p-8 mt-10">

  <h2 className="text-3xl font-bold text-red-700 mb-6">
    Medication Safety Alerts
  </h2>

  <div className="space-y-4 text-lg text-red-800">

    <p>
      • Avoid exceeding prescribed pediatric dosage.
    </p>

    <p>
      • Monitor allergic reactions after new medications.
    </p>

    <p>
      • Store medicines away from direct sunlight and children.
    </p>

    <p>
      • Consult pediatrician before combining medications.
    </p>

  </div>

</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

  <div className="bg-blue-100 p-8 rounded-3xl">

    <h3 className="text-blue-800 text-2xl font-bold">
      Dose Accuracy
    </h3>

    <p className="text-5xl font-bold text-blue-700 mt-4">
      97%
    </p>

  </div>

  <div className="bg-green-100 p-8 rounded-3xl">

    <h3 className="text-green-800 text-2xl font-bold">
      Reminder Success
    </h3>

    <p className="text-5xl font-bold text-green-700 mt-4">
      93%
    </p>

  </div>

  <div className="bg-purple-100 p-8 rounded-3xl">

    <h3 className="text-purple-800 text-2xl font-bold">
      AI Monitoring
    </h3>

    <p className="text-5xl font-bold text-purple-700 mt-4">
      Active
    </p>

  </div>

</div>

    </motion.div>

  );
}

export default Medications;