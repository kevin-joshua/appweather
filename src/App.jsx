import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const API_KEY = 'e0548f46c88364f287990feeccba97bc';  // Replace with your OpenWeather API key


function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(""); // State for handling errors

  const fetchWeather = async () => {
    setError(""); // Clear previous errors
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
      } else {
        throw new Error(data.message || "City not found"); // Throw error if response is not ok
      }
    } catch (error) {
      setError("City not found. Please enter a valid city name."); // Set error message
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-purple-500">
      <div className="p-6 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg max-w-md w-full">
        <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />

        {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
        {weather && !error && <WeatherCard weather={weather} />} {/* Show weather card only if there's no error */}
      </div>
    </div>
  );
}

export default App;