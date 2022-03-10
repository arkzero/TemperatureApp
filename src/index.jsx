import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import WeatherDisplay from './WeatherDisplay';
import SearchBar from './SearchBar';

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
      zipCode: '07950',
    };
  }

  componentDidMount() {
    this.getTemperature();
  }

  componentDidUpdate(prevProps, prevState) {
    const { tempKelv, tempFar, zipCode } = this.state;

    if (tempKelv) {
      const far = convertKelvinToFahrenheit(tempKelv);
      if (far !== tempFar) {
        this.setState({ tempFar: far });
      }
    }

    if (prevState.zipCode !== zipCode) {
      this.getTemperature();
    }
  }

  async getTemperature() {
    const { zipCode } = this.state;
    const countryCode = 'us';

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${OPEN_WEATHER_API_KEY}`);
      this.setState({ tempKelv: response.data.main.temp });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  onFormSubmit = (zipCode) => {
    this.setState({ zipCode });
  };

  render() {
    const { tempFar } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.onFormSubmit} zipCode={'07950'} />
        <WeatherDisplay temp={tempFar} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
