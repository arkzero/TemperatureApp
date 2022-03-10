import axios from 'axios';

const OPEN_WEATHER_API_KEY = '362a4b039038e395008ed626997d3623';

const openWeatherMap = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params: {
    appid: OPEN_WEATHER_API_KEY,
  },
});

function convertKelvinToFahrenheit(temp) {
  return ((9 / 5) * (temp - 273) + 32).toFixed(2);
}

const getWeatherByZip = async (zipCode) => {
  try {
    const response = await openWeatherMap.get('/weather', {
      params: {
        zip: `${zipCode},us`
      },
    });

    return convertKelvinToFahrenheit(response.data.main.temp);
  } catch (error) {
    console.error('Error making API Request', error);
    throw error;
  }
};

export default {
  getWeatherByZip
}