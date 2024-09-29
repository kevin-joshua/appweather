import { WiCloud, WiDaySunny, WiRain, WiSnow } from 'react-icons/wi'; // Ensure this import is correct if you're using react-icons

function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <div className="mb-6">
      {/* Input Bar */}
      <input
        type="text"
        className="border-0 outline-none w-full px-6 py-3 text-lg rounded-2xl shadow-xl text-gray-700 bg-white/90 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ backdropFilter: 'blur(10px)' }}
      />

      {/* Get Weather Button */}
      <button
        className="w-full mt-4 bg-purple-600 text-white py-3 rounded-2xl shadow-xl hover:bg-purple-500 transition-all duration-300"
        onClick={fetchWeather}
      >
        Get Weather
      </button>
    </div>
  );
}

export default SearchBar;
