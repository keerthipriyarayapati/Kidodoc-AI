import toast from "react-hot-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function SymptomChecker() {

  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState("");

  const [childName, setChildName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [recommendation, setRecommendation] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const commonSymptoms = [
    "itching",
    "skin_rash",
    "vomiting",
    "fatigue",
    "high_fever",
    "cough",
    "headache",
    "stomach_pain"
  ];

  const handlePrediction = async () => {

    setLoading(true);

    if (!childName || !age || !gender || !symptom) {

      setLoading(false);
      setError("All fields are required");
      return;

    }

    if (age <= 0 || age > 18) {

      setLoading(false);
      setError("Enter a valid child age");
      return;

    }

    setError("");
try {

  await axios.post(
    "http://127.0.0.1:5000/add_child",
    {
      name: childName,
      age: age,
      gender: gender
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );

  const response = await axios.post(
    "http://127.0.0.1:5000/predict",
    {
      child_name: childName,
      age: age,
      gender: gender,
      symptoms: symptom.split(","),
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );

  setResult(response.data.predicted_disease);

  toast.success("Prediction completed");

  setRecommendation(
    "Please consult a pediatrician for professional medical advice."
  );

  setLoading(false);

  } catch (error) {

  console.log(error);

  setLoading(false);

  if (error.response?.status === 401) {

    localStorage.removeItem("token");

    window.location.href = "/";

  }

  toast.error(
    error.response?.data?.message || "Prediction failed"
  );

}

};
  return (

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8"
    >

      <h2 className="text-3xl font-bold text-blue-800 mb-6">
        Symptom Checker
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

        <input
          type="text"
          placeholder="Child Name"
          value={childName}
          onChange={(e) => setChildName(e.target.value)}
          className="p-4 border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-100 rounded-xl"
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="p-4 border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-100 rounded-xl"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="p-4 border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-100 rounded-xl"
        >

          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>

        </select>

      </div>

      <input
        type="text"
        placeholder="Enter symptoms separated by commas"
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
        className="w-full p-4 border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-100 rounded-xl mb-4"
      />

      {error && (

        <p className="text-red-500 text-sm mb-4 font-medium">
          {error}
        </p>

      )}

      <div className="flex flex-wrap gap-2 mb-6">

        {commonSymptoms.map((item, index) => (

          <button
            key={index}
            onClick={() => setSymptom(item)}
            className="bg-blue-100 hover:bg-blue-200 transition-all duration-300 text-blue-800 px-5 py-2 rounded-full font-medium"
          >

            {item}

          </button>

        ))}

      </div>

      <button
        onClick={handlePrediction}
        disabled={loading}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:opacity-90 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg disabled:opacity-60"
      >

        {loading ? "Predicting..." : "Predict Disease"}

      </button>

      {result && (

        <div className="mt-6 bg-blue-100 p-4 rounded-xl">

          <div className="mb-4">

            <p className="text-blue-800">
              <span className="font-bold">Child Name:</span> {childName}
            </p>

            <p className="text-blue-800">
              <span className="font-bold">Age:</span> {age}
            </p>

            <p className="text-blue-800">
              <span className="font-bold">Gender:</span> {gender}
            </p>

          </div>

          <h3 className="text-xl font-semibold text-blue-800">
            Predicted Disease:
          </h3>

          <p className="text-lg text-blue-800 mt-2">
            {result}
          </p>

          <p className="text-gray-700 mt-4">
            {recommendation}
          </p>

          <div className="mt-4 bg-red-100 border border-red-300 p-4 rounded-xl">

            <p className="text-red-700 font-medium">
              If symptoms become severe or persist, seek immediate medical attention.
            </p>

          </div>

        </div>

      )}

    </motion.div>
  );
}

export default SymptomChecker;