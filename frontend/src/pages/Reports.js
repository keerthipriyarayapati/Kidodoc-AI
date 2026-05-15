import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Reports() {

  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {

    try {

      setLoading(true);

      const response = await axios.get(
  "http://127.0.0.1:5000/download_report",
        {
          responseType: "blob"
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute(
        "download",
        "kidodoc_report.pdf"
      );

      document.body.appendChild(link);

      link.click();

      toast.success("Report downloaded");

      setLoading(false);

    } catch (error) {

      setLoading(false);

      console.log(error);

      toast.error("Download failed");

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

          Health Reports

        </h2>

        <button
          onClick={handleDownload}
          className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:opacity-90 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg"
        >

          {loading ? "Downloading..." : "Export Reports"}

        </button>

      </div>

      <div className="space-y-6 mb-10">

        <div className="bg-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 rounded-3xl flex flex-col md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="text-2xl font-bold text-blue-800">

              Monthly Health Report

            </h3>

            <p className="text-blue-700 mt-2">

              Complete pediatric health summary

            </p>

          </div>

          <button
            onClick={handleDownload}
            className="mt-6 md:mt-0 bg-blue-600 hover:scale-105 hover:bg-blue-700 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold"
          >

            {loading ? "Downloading..." : "Download PDF"}

          </button>

        </div>

        <div className="bg-purple-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 rounded-3xl flex flex-col md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="text-3xl font-bold text-purple-800">

              Vaccination Report

            </h3>

            <p className="text-gray-500 mt-3 text-lg">

              Complete vaccination records and schedules.

            </p>

          </div>

          <button
            onClick={handleDownload}
            className="mt-6 md:mt-0 bg-purple-600 hover:scale-105 hover:bg-purple-700 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold"
          >

            {loading ? "Downloading..." : "Download PDF"}

          </button>

        </div>

        <div className="bg-green-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 rounded-3xl flex flex-col md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="text-3xl font-bold text-green-800">

              AI Prediction Report

            </h3>

            <p className="text-gray-500 mt-3 text-lg">

              AI-generated symptom analysis and healthcare insights.

            </p>

          </div>

          <button
            onClick={handleDownload}
            className="mt-6 md:mt-0 bg-green-600 hover:scale-105 hover:bg-green-700 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold"
          >

            {loading ? "Downloading..." : "Download PDF"}

          </button>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8 rounded-3xl">

          <h3 className="text-2xl font-bold text-blue-800 mb-4">

            Medical Reports

          </h3>

          <p className="text-blue-700">

            Pediatric checkup and treatment summaries.

          </p>

        </div>

        <div className="bg-purple-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8 rounded-3xl">

          <h3 className="text-2xl font-bold text-purple-800 mb-4">

            Vaccination Reports

          </h3>

          <p className="text-purple-700">

            Complete vaccine history and schedules.

          </p>

        </div>

        <div className="bg-green-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8 rounded-3xl">

          <h3 className="text-2xl font-bold text-green-800 mb-4">

            AI Analysis

          </h3>

          <p className="text-green-700">

            AI-generated symptom prediction reports.

          </p>

        </div>

      </div>

    </motion.div>

  );
}

export default Reports;