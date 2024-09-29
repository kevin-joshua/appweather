import { WiCloud, WiDaySunny, WiRain, WiSnow } from 'react-icons/wi'; // Ensure correct imports for icons

function WeatherCard({ weather }) {
  const weatherIcon = () => {
    switch (weather.weather[0].main) {
      case "Clear":
        return <WiDaySunny className="text-yellow-400 text-8xl mb-2 drop-shadow-md" />;
      case "Clouds":
        return <WiCloud className="text-gray-500 text-8xl mb-2 drop-shadow-md" />;
      case "Rain":
        return <WiRain className="text-blue-400 text-8xl mb-2 drop-shadow-md" />;
      case "Snow":
        return <WiSnow className="text-white text-8xl mb-2 drop-shadow-md" />;
      default:
        return <WiCloud className="text-gray-400 text-8xl mb-2 drop-shadow-md" />;
    }
  };

  return (
    <div className="flex flex-col items-center text-gray-900 text-center">
      {weatherIcon()}
      <h2 className="text-5xl font-bold mt-2">{weather.main.temp}°C</h2>
      <p className="text-2xl mt-1">{weather.name}</p>
      <p className="text-lg mt-1 capitalize">{weather.weather[0].description}</p>

      <div className="flex justify-between w-full mt-4">
        <p className="text-md">Humidity: {weather.main.humidity}%</p>
        <p className="text-md">Wind: {weather.wind.speed} km/h</p>
      </div>
    </div>
  );
}

export default WeatherCard;
