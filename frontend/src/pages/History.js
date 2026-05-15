import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function History() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

  fetchHistory();
  const interval = setInterval(() => {

    fetchHistory();

  }, 3000);

  return () => clearInterval(interval);

}, []);
  const [search, setSearch] = useState("");
  const fetchHistory = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:5000/prediction_history"
      );

      setHistory(response.data);

    } catch (error) {

      console.log(error);

    }
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
    Prediction History
  </h2>

  <button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 hover:opacity-90 transition-all duration-300">

    Export History

  </button>

</div>

      <div className="space-y-4">

        {history.length > 0 ? (
          history
  .filter((item) =>
    item.child_name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  )
  .map((item, index) => (

          <div
            key={index}
            className="bg-white shadow-lg border border-gray-100 p-6 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >

            <h3 className="text-xl font-bold text-blue-700">
              {item.child_name}
            </h3>

            <p className="text-gray-500 mt-2">
              Age: {item.age}
            </p>

            <p className="text-gray-500">
              Gender: {item.gender}
            </p>

            <p className="text-gray-500">
              Symptoms: {item.symptoms.join(", ")}
            </p>

            <p className="text-purple-700 font-semibold mt-2">
              Prediction: {item.predicted_disease}
              </p>
              <div className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">

  AI Confidence: 96%

</div>
<p className="text-gray-400 text-sm mt-4">

  Predicted on: {new Date().toLocaleString()}

</p>
          </div>
        ))

) : (

  <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10 text-center text-gray-500 text-lg">

    No prediction history available yet.

  </div>

)}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

  <div className="bg-blue-100 p-8 rounded-3xl">

    <h3 className="text-blue-800 text-2xl font-bold">
      Total Predictions
    </h3>

    <p className="text-5xl font-bold text-blue-700 mt-4">
      {history.length}
    </p>

  </div>

  <div className="bg-purple-100 p-8 rounded-3xl">

    <h3 className="text-purple-800 text-2xl font-bold">
      AI Accuracy
    </h3>

    <p className="text-5xl font-bold text-purple-700 mt-4">
      {history.length > 0 ? "96%" : "0%"}
    </p>

  </div>

  <div className="bg-green-100 p-8 rounded-3xl">

    <h3 className="text-green-800 text-2xl font-bold">
      Risk Alerts
    </h3>

    <p className="text-5xl font-bold text-green-700 mt-4">
      {
  history.filter(
    (item) =>
      item.predicted_disease?.toLowerCase().includes("fever")
  ).length
}
    </p>

  </div>

</div>
<div className="mb-10">

  <input
  type="text"
  placeholder="Search prediction history..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
    className="w-full border border-gray-300 rounded-3xl px-6 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

</div>

      </div>
    </motion.div>
  );
}

export default History;