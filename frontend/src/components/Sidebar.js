function Sidebar({ activePage, setActivePage }) {

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    window.location.href = "/";
  };

  return (

    <div className="w-80 sticky top-0 h-screen overflow-y-auto bg-gradient-to-b from-blue-800 to-blue-600 text-white p-8 shadow-2xl block md:block">

      <h1 className="text-3xl font-bold mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        KidoDoc AI
      </h1>

      <div className="space-y-2 text-lg">

        <button
  onClick={() => setActivePage("overview")}
  className={`w-full text-left px-5 py-2 rounded-2xl font-semibold transition ${
    activePage === "overview"
      ? "bg-white text-blue-700 shadow-lg"
      : "hover:bg-white hover:text-blue-700"
  }`}
>
  <p className="text-blue-200 uppercase text-xs tracking-widest mb-3">
  Main
</p>

    🏠 Overview

</button>

        <button
  onClick={() => setActivePage("symptoms")}
  className={`w-full text-left px-5 py-2 rounded-2xl font-semibold transition ${
    activePage === "symptoms"
      ? "bg-white text-blue-700 shadow-lg"
      : "hover:bg-white hover:text-blue-700"
  }`}
>
  🩺 Symptom Checker
</button>

        <button
  onClick={() => setActivePage("vaccinations")}
  className={`w-full text-left px-5 py-2 rounded-2xl font-semibold transition ${
    activePage === "vaccinations"
      ? "bg-white text-blue-700 shadow-lg"
      : "hover:bg-white hover:text-blue-700"
  }`}
>
  💉 Vaccinations
</button>

        <button
  onClick={() => setActivePage("appointments")}
  className={`w-full text-left px-5 py-2 rounded-2xl font-semibold transition ${
    activePage === "appointments"
      ? "bg-white text-blue-700 shadow-lg"
      : "hover:bg-white hover:text-blue-700"
  }`}
>
  📅 Appointments
</button>
 
 <div className="border-t border-blue-400 my-2"></div>
<button

  onClick={() => setActivePage("history")}
  className={`w-full text-left px-5 py-2 rounded-2xl font-semibold transition ${
    activePage === "history"
      ? "bg-white text-blue-700 shadow-lg"
      : "hover:bg-white hover:text-blue-700"
  }`}
>
  <p className="text-blue-200 uppercase text-xs tracking-widest mb-3 mt-6">
  Health Management
</p>

 📜 Prediction History
</button>

<button
  onClick={() => setActivePage("growth")}
  className={`w-full text-left px-5 py-2 rounded-2xl font-semibold transition ${
    activePage === "growth"
      ? "bg-white text-blue-700 shadow-lg"
      : "hover:bg-white hover:text-blue-700"
  }`}
>
  📈 Growth Tracker
</button>

<button
  onClick={() => setActivePage("medications")}
  className={`w-full text-left px-5 py-2 rounded-2xl font-semibold transition ${
    activePage === "medications"
      ? "bg-white text-blue-700 shadow-lg"
      : "hover:bg-white hover:text-blue-700"
  }`}
>
  💊 Medications
</button>

<button
  onClick={() => setActivePage("emergency")}
  className={`w-full text-left px-5 py-2 rounded-2xl font-semibold transition ${
    activePage === "emergency"
      ? "bg-white text-blue-700 shadow-lg"
      : "hover:bg-white hover:text-blue-700"
  }`}
>
  🚨 Emergency Support
</button>

        <button
  onClick={() => setActivePage("reports")}
  className={`w-full text-left px-5 py-2 rounded-2xl font-semibold transition ${
    activePage === "reports"
      ? "bg-white text-blue-700 shadow-lg"
      : "hover:bg-white hover:text-blue-700"
  }`}
>
  📄 Health Reports
</button>

        <button
  onClick={() => setActivePage("settings")}
  className={`w-full text-left px-5 py-2 rounded-2xl font-semibold transition ${
    activePage === "settings"
      ? "bg-white text-blue-700 shadow-lg"
      : "hover:bg-white hover:text-blue-700"
  }`}
>
  ⚙️ Settings
</button>

        <button
          onClick={handleLogout}
          className="w-full text-left hover:bg-red-500 px-5 py-2 rounded-2xl transition"
        >
          🚪 Logout
        </button>

</div>

      <div className="mt-3 bg-blue-500 bg-opacity-20 p-5 rounded-3xl hover:scale-105 transition duration-300 cursor-pointer">

        <div className="flex items-center gap-2">

          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-blue-700 font-bold text-xl">
            KP
          </div>

          <div>

            <h3 className="font-bold text-lg">
              Parent Account
            </h3>

            <p className="text-blue-100 text-sm">
              Premium Healthcare Access
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Sidebar;