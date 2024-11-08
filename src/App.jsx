import TopButtons from './TopButtons';
import Inputs from './Input';
import TimeAndLocation from './TimeAndLocation';
import TempAndDetails from './TempAndDetails';
import Forecast from './Forecast';
import getFormattedWeatherData from './weatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({}); // Start with an empty query
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const location =
      query.q || (query.lat && query.lon ? 'Current Location' : '');
    toast.info(
      `Fetching weather data for ${capitalizeFirstLetter(
        location || 'Current Location'
      )}`
    );

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      if (data) {
        toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
        setWeather(data);
      } else {
        toast.error('Unable to fetch weather data');
      }
    });
  };

  const fetchUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setQuery({ lat: latitude, lon: longitude });
      },
      (error) => {
        console.error('Geolocation permission denied. Using default location.');
        setQuery({ q: 'Kolkata' });
      }
    );
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === 'metric' ? 20 : 60;
    return weather.temp <= threshold
      ? 'from-cyan-600 to-blue-700'
      : 'from-yellow-600 to-orange-700';
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-4 px-6 sm:px-4 bg-gradient-to-br shadow-lg shadow-gray-600 text-white mb-8 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <Forecast title="3-hour step forecast" data={weather.hourly} />
          <Forecast title="Daily forecast" data={weather.daily} />
        </>
      )}
      <Footer />
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
};

export default App;
