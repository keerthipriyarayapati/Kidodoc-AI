import { motion } from "framer-motion";
function Vaccination() {

  const vaccines = [
    {
      name: "BCG Vaccine",
      status: "Completed"
    },
    {
      name: "Polio Vaccine",
      status: "Upcoming"
    },
    {
      name: "Hepatitis B",
      status: "Completed"
    },
    {
      name: "MMR Vaccine",
      status: "Pending"
    },
    {
      name: "DPT Vaccine",
      status: "Upcoming"
    }
  ];
  const completedCount = vaccines.filter(
  (vaccine) => vaccine.status === "Completed"
).length;

const upcomingCount = vaccines.filter(
  (vaccine) => vaccine.status === "Upcoming"
).length;

const pendingCount = vaccines.filter(
  (vaccine) => vaccine.status === "Pending"
).length;

const progress =
  Math.round(
    (completedCount / vaccines.length) * 100
  ) || 0;
  return (

    <motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8"
>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">

        <h2 className="text-5xl font-bold text-purple-700">
          Vaccinations
        </h2>

        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 hover:opacity-90 transition-all duration-300 w-fit">

          Add Vaccine Record

        </button>

      </div>

      <div className="bg-yellow-100 border border-yellow-300 p-6 rounded-2xl mb-8">

        <h3 className="text-yellow-800 font-bold text-2xl">
          Upcoming Reminder
        </h3>

        <p className="text-yellow-700 mt-3 text-lg">
          Next vaccination due in 5 days.
        </p>

      </div>
<div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">

  <div className="flex items-center justify-between mb-6">

    <h2 className="text-3xl font-bold text-purple-700">
      Vaccination Progress
    </h2>

    <span className="text-2xl font-bold text-green-600">
      {progress}%
    </span>

  </div>

  <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">

    <div
  className="bg-gradient-to-r from-purple-600 to-pink-500 h-5 rounded-full"
  style={{ width: `${progress}%` }}
></div>

  </div>

  <p className="text-gray-500 mt-5">
    Vaccination schedule is progressing normally.
  </p>

</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

  <div className="bg-green-100 p-8 rounded-3xl">

    <h3 className="text-green-800 text-2xl font-bold">
      Completed
    </h3>

    <p className="text-5xl font-bold text-green-700 mt-4">
      {completedCount}
    </p>

  </div>

  <div className="bg-yellow-100 p-8 rounded-3xl">

    <h3 className="text-yellow-800 text-2xl font-bold">
      Upcoming
    </h3>

    <p className="text-5xl font-bold text-yellow-700 mt-4">
      {upcomingCount}
    </p>

  </div>

  <div className="bg-red-100 p-8 rounded-3xl">

    <h3 className="text-red-800 text-2xl font-bold">
      Pending
    </h3>

    <p className="text-5xl font-bold text-red-700 mt-4">
      {pendingCount}
    </p>

  </div>

</div>
<div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-10 shadow-2xl mb-10">

  <h2 className="text-3xl font-bold mb-6">
    AI Vaccination Insights
  </h2>

  <div className="space-y-4 text-lg">

    <p>
      • Vaccination consistency remains healthy.
    </p>

    <p>
      • No overdue critical vaccines detected.
    </p>

    <p>
      • Upcoming vaccine schedule aligns with pediatric standards.
    </p>

    <p>
      • AI monitoring recommends continuing timely vaccinations.
    </p>

  </div>

</div>
      <div className="space-y-6">

        {vaccines.map((vaccine, index) => (

          <div
            key={index}
            className="bg-purple-50 border border-purple-100 p-6 rounded-3xl flex flex-col md:flex-row md:items-center md:justify-between shadow-md hover:shadow-xl transition duration-300"
          >

            <div>

              <h3 className="text-2xl font-bold text-purple-800">
                {vaccine.name}
              </h3>

              <p className="text-purple-600 mt-2 text-lg">
                Status: {vaccine.status}
              </p>

            </div>

            <button className="mt-5 md:mt-0 bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-105 hover:opacity-90 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold shadow-md">

              Update

            </button>

          </div>

        ))}
        
      </div>
    </motion.div>
  );
}

export default Vaccination;