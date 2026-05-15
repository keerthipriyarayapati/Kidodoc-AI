import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function GrowthTracker() {

  const data = [
    {
      month: "Jan",
      height: 105,
      weight: 18
    },
    {
      month: "Feb",
      height: 108,
      weight: 19
    },
    {
      month: "Mar",
      height: 110,
      weight: 20
    },
    {
      month: "Apr",
      height: 114,
      weight: 22
    },
    {
      month: "May",
      height: 120,
      weight: 24
    }
  ];

  const hasData = true;

  return (

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8"
    >

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

        <h2 className="text-4xl font-bold text-green-700">
          Growth Tracker
        </h2>

        <button className="mt-4 md:mt-0 bg-gradient-to-r from-green-600 to-blue-600 hover:scale-105 hover:opacity-90 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg">

          Export Analytics

        </button>

      </div>

      <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-2xl font-semibold mb-8">

        Pediatric Status: Healthy Growth Pattern Detected

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-green-100 p-8 rounded-3xl"
        >

          <h3 className="text-green-800 text-2xl font-bold">
            Height
          </h3>

          <p className="text-5xl font-bold text-green-700 mt-4">
            120 cm
          </p>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-blue-100 p-8 rounded-3xl"
        >

          <h3 className="text-blue-800 text-2xl font-bold">
            Weight
          </h3>

          <p className="text-5xl font-bold text-blue-700 mt-4">
            24 kg
          </p>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-purple-100 p-8 rounded-3xl"
        >

          <h3 className="text-purple-800 text-2xl font-bold">
            BMI
          </h3>

          <p className="text-5xl font-bold text-purple-700 mt-4">
            Healthy
          </p>

        </motion.div>

      </div>

      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 p-8 mt-10">

        <h2 className="text-3xl font-bold text-blue-800 mb-8">
          Growth Analytics
        </h2>

        <div className="space-y-6">

          <div>

            <div className="flex justify-between mb-2">

              <span className="font-semibold text-gray-700">
                Height Progress
              </span>

              <span className="text-green-700 font-bold">
                85%
              </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-5">

              <div className="bg-gradient-to-r from-green-500 to-blue-500 h-5 rounded-full w-[85%]"></div>

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">

              <span className="font-semibold text-gray-700">
                Weight Progress
              </span>

              <span className="text-purple-700 font-bold">
                72%
              </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-5">

              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-5 rounded-full w-[72%]"></div>

            </div>

          </div>

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 p-8 mt-10">

        <h2 className="text-3xl font-bold text-blue-800 mb-8">
          Monthly Growth Trends
        </h2>

        <div className="flex gap-6 mb-6">

          <div className="flex items-center gap-2">

            <div className="w-4 h-4 rounded-full bg-blue-600"></div>

            <span className="text-gray-700 font-medium">
              Height
            </span>

          </div>

          <div className="flex items-center gap-2">

            <div className="w-4 h-4 rounded-full bg-purple-600"></div>

            <span className="text-gray-700 font-medium">
              Weight
            </span>

          </div>

        </div>

        <div className="w-full h-[400px]">

          {hasData ? (

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={data}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="height"
                  stroke="#2563eb"
                  strokeWidth={4}
                />

                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#9333ea"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          ) : (

            <div className="flex items-center justify-center h-full text-gray-400 text-xl">

              No analytics data available

            </div>

          )}

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-green-100 p-8 rounded-3xl"
        >

          <h3 className="text-green-800 text-2xl font-bold">
            Avg Growth
          </h3>

          <p className="text-5xl font-bold text-green-700 mt-4">
            +12%
          </p>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-blue-100 p-8 rounded-3xl"
        >

          <h3 className="text-blue-800 text-2xl font-bold">
            BMI Status
          </h3>

          <p className="text-5xl font-bold text-blue-700 mt-4">
            Healthy
          </p>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-purple-100 p-8 rounded-3xl"
        >

          <h3 className="text-purple-800 text-2xl font-bold">
            Vaccination
          </h3>

          <p className="text-5xl font-bold text-purple-700 mt-4">
            100%
          </p>

        </motion.div>

      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-10 mt-10 shadow-2xl">

        <h2 className="text-3xl font-bold mb-6">
          AI Growth Insights
        </h2>

        <div className="space-y-4 text-lg">

          <p>
            • Child growth progression is healthy and stable.
          </p>

          <p>
            • Weight increase aligns with pediatric standards.
          </p>

          <p>
            • No abnormal BMI fluctuations detected.
          </p>

          <p>
            • Vaccination consistency positively impacts growth trends.
          </p>

        </div>

      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8 mt-10">

        <h2 className="text-3xl font-bold text-yellow-700 mb-6">
          Pediatric Recommendations
        </h2>

        <div className="space-y-4 text-lg text-yellow-800">

          <p>
            • Maintain balanced nutrition with proteins and vitamins.
          </p>

          <p>
            • Encourage regular physical activity and outdoor play.
          </p>

          <p>
            • Ensure proper hydration and sleep schedule.
          </p>

          <p>
            • Continue routine pediatric checkups for healthy development.
          </p>

        </div>

      </div>

      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-10 mt-10 shadow-2xl">

        <h2 className="text-3xl font-bold mb-6">
          Healthcare Analytics Summary
        </h2>

        <div className="space-y-4 text-lg">

          <p>
            • Growth metrics remain within healthy pediatric range.
          </p>

          <p>
            • Consistent vaccination schedules improve immunity trends.
          </p>

          <p>
            • No high-risk health indicators currently detected.
          </p>

          <p>
            • AI monitoring recommends continuing current health routine.
          </p>

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mt-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">

          <div>

            <h2 className="text-3xl font-bold text-blue-800">
              AI Prediction Confidence
            </h2>

            <p className="text-gray-500 mt-3">
              Analytics confidence based on growth consistency and pediatric standards.
            </p>

          </div>

          <div className="mt-6 md:mt-0 text-center">

            <div className="w-32 h-32 rounded-full border-[10px] border-blue-200 flex items-center justify-center relative">

              <div className="absolute inset-0 rounded-full border-[10px] border-blue-600 border-t-transparent animate-spin"></div>

              <div className="text-4xl font-bold text-blue-700 z-10">
                96%
              </div>

            </div>

            <p className="text-blue-600 font-semibold mt-2">
              High Confidence
            </p>

          </div>

        </div>

      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 mt-10">

        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Future Growth Predictions
        </h2>

        <div className="space-y-4 text-lg text-blue-900">

          <p>
            • Expected healthy height increase over next 6 months.
          </p>

          <p>
            • Weight progression projected within pediatric standards.
          </p>

          <p>
            • No developmental delays predicted from current analytics.
          </p>

          <p>
            • AI monitoring recommends maintaining current nutrition habits.
          </p>

        </div>

      </div>

      <div className="text-center text-gray-400 text-sm mt-16">

        Growth analytics are AI-assisted and should not replace professional pediatric consultation.

      </div>

    </motion.div>

  );
}

export default GrowthTracker;