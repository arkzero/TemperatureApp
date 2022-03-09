import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import WeatherDisplay from './WeatherDisplay';

const OPEN_WEATHER_API_KEY = '362a4b039038e395008ed626997d3623';

function convertKelvinToFahrenheit(temp) {
  return ((9 / 5) * (temp - 273) + 32).toFixed(2);
}

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize State
    this.state = {
      tempFar: null,
      tempKelv: null,
      error: null,
    };
  }

  componentDidMount() {
    this.getTemperature();
  }

  componentDidUpdate() {
    const { tempKelv, tempFar } = this.state;
    if (tempKelv) {
      const far = convertKelvinToFahrenheit(tempKelv);
      if (far !== tempFar) {
        this.setState({ tempFar: far });
      }
    }
  }

  async getTemperature() {
    const zipCode = '07950';
    const countryCode = 'us';

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${OPEN_WEATHER_API_KEY}`);
      this.setState({ tempKelv: response.data.main.temp });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { tempFar } = this.state;
    return (
      <div>
        <WeatherDisplay temp={tempFar} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
