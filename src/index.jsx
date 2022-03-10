import React from 'react';
import ReactDOM from 'react-dom';

import WeatherDisplay from './WeatherDisplay';
import SearchBar from './SearchBar';
import OpenWeatherMap from './OpenWeatherMap';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize State
    this.state = {
      temp: null,
      error: null,
      zipCode: '07950',
    };
  }

  componentDidMount() {
    this.getTemperature();
  }

  componentDidUpdate(prevProps, prevState) {
    const { zipCode } = this.state;

    if (prevState.zipCode !== zipCode) {
      this.getTemperature();
    }
  }

  async getTemperature() {
    const { zipCode } = this.state;

    try {
      const response = await OpenWeatherMap.getWeatherByZip(zipCode);
      this.setState({ temp: response });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  onFormSubmit = (zipCode) => {
    this.setState({ zipCode });
  };

  render() {
    const { temp, error } = this.state;

    if (temp) {
      return (
        <div>
          <SearchBar onSubmit={this.onFormSubmit} zipCode={'07950'} />
          <WeatherDisplay temp={temp} />
        </div>
      );
    }

    if (error) {
      return (
        <h2>ERROR: {error}</h2>
      )
    }

    return <h2>Loading...</h2>

  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
