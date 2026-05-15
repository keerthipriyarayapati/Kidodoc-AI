function Topbar({ activePage }) {

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    window.location.href = "/";

  };

  const pageTitles = {

    overview: "Overview",
    symptoms: "Symptom Checker",
    vaccinations: "Vaccinations",
    appointments: "Appointments",
    history: "Prediction History",
    growth: "Growth Tracker",
    medications: "Medications",
    emergency: "Emergency Support",
    reports: "Health Reports",
    settings: "Settings"
  };

  const pageDescriptions = {

    overview: "Smart Pediatric Healthcare Assistant",
    symptoms: "AI-powered disease prediction system",
    vaccinations: "Manage and track vaccine schedules",
    appointments: "Schedule pediatric consultations",
    history: "View previous AI prediction records",
    growth: "Monitor child growth and development",
    medications: "Track medicines and reminders",
    emergency: "Emergency healthcare support access",
    reports: "Download and manage medical reports",
    settings: "Manage account and preferences"
  };

  const pageIcons = {

    overview: "🏠",
    symptoms: "🩺",
    vaccinations: "💉",
    appointments: "📅",
    history: "📜",
    growth: "📈",
    medications: "💊",
    emergency: "🚨",
    reports: "📄",
    settings: "⚙️"
  };

  const currentTitle = pageTitles[activePage];

  return (

    <div className="flex items-center justify-between mb-10">

      <div>

        <h1 className="text-5xl font-bold text-blue-800">

          {pageIcons[activePage]} {currentTitle}

        </h1>

        <p className="text-gray-500 mt-2 text-lg">

          {pageDescriptions[activePage]}

        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="relative w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl">

          🔔

          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">

            3

          </div>

        </div>

        <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl">

          👶

        </div>

        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-red-500 to-red-600 hover:scale-105 hover:opacity-90 transition-all duration-300 text-white px-5 py-3 rounded-2xl font-semibold shadow-lg"
        >

          Logout

        </button>

      </div>

    </div>

  );
}

export default Topbar;