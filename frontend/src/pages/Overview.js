import { motion } from "framer-motion";

function Overview({ setActivePage }) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >

      {/* Header */}

      <div>

        <h1 className="text-5xl font-bold text-blue-900">

          Parent Dashboard

        </h1>

        <p className="text-gray-500 text-2xl mt-3">

          Smart Pediatric Healthcare Assistant

        </p>

      </div>

      {/* Search Bar */}

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 px-8 py-5">

        <input
          type="text"
          placeholder="Search health records, symptoms, vaccines..."
          className="w-full outline-none text-xl text-gray-700"
        />

      </div>

      {/* Top Grid */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Child Profile */}

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl">

          <div className="flex items-start justify-between">

            <div>

              <h2 className="text-4xl font-bold">

                Child Profile

              </h2>

              <p className="mt-5 text-blue-100 text-xl leading-relaxed">

                Monitor your child's health records, symptoms,
                and vaccination progress in one place.

              </p>

            </div>

            <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center text-5xl">

              👶

            </div>

          </div>

          <div className="mt-10 inline-flex items-center gap-3 bg-white text-green-700 px-6 py-4 rounded-2xl font-semibold text-lg">

            <div className="w-4 h-4 bg-green-500 rounded-full"></div>

            Active Monitoring

          </div>

        </div>

        {/* Recent Activity */}

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

          <h2 className="text-4xl font-bold text-blue-900 mb-8">

            Recent Health Activity

          </h2>

          <div className="space-y-6">

            <div className="bg-blue-50 rounded-2xl p-6 flex items-center justify-between">

              <div>

                <h3 className="text-2xl font-bold text-blue-900">

                  Symptom Check Completed

                </h3>

                <p className="text-gray-500 mt-2 text-lg">

                  Fever and cough symptoms analyzed.

                </p>

              </div>

              <span className="text-blue-700 font-semibold text-lg">

                Today

              </span>

            </div>

            <div className="bg-purple-50 rounded-2xl p-6 flex items-center justify-between">

              <div>

                <h3 className="text-2xl font-bold text-purple-900">

                  Vaccination Updated

                </h3>

                <p className="text-gray-500 mt-2 text-lg">

                  MMR vaccine marked completed.

                </p>

              </div>

              <span className="text-purple-700 font-semibold text-lg">

                Yesterday

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Second Grid */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Reports */}

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-4xl font-bold text-blue-900">

                Child Health Reports

              </h2>

              <p className="text-gray-500 mt-4 text-xl leading-relaxed">

                Download previous symptom analysis
                and vaccination summaries.

              </p>

              <button
                onClick={() => setActivePage("reports")}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-semibold text-lg shadow-lg"
              >

                Download Report

              </button>

            </div>

            <div className="text-7xl">

              📄

            </div>

          </div>

        </div>

        {/* Appointments */}

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-4xl font-bold text-blue-900">

                Pediatric Appointment

              </h2>

              <p className="text-gray-500 mt-4 text-xl leading-relaxed">

                Schedule consultations with pediatric
                specialists for professional healthcare guidance.

              </p>

              <button
                onClick={() => setActivePage("appointments")}
                className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-2xl font-semibold text-lg shadow-lg"
              >

                Book Appointment

              </button>

            </div>

            <div className="text-7xl">

              📅

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

        <p className="text-gray-500 text-lg leading-relaxed">

          KidoDoc AI provides preliminary pediatric health guidance and is not a substitute for professional medical advice.

        </p>

      </div>

    </motion.div>

  );
}

export default Overview;