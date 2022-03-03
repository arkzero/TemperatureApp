import React from 'react';
import PropTypes from 'prop-types';

import './WeatherDisplay.css';

function getWeatherDescription(temp) {
  let message;
  if (temp < 0) {
    message = 'Please stay inside';
  } else if (temp > 0 && temp < 32) {
    message = 'It is freezing';
  } else if (temp > 32 && temp < 55) {
    message = 'It is chilly';
  } else if (temp > 55 && temp < 75) {
    message = 'It is really nice outside';
  } else {
    message = 'It is real hot';
  }

  return message;
}

function WeatherDisplay(props) {
  const { temp } = props;
  const description = getWeatherDescription(temp);

  return (
    <div className="weather-display">
      <h1>
        { temp }
      </h1>
      <h2>
        { description }
      </h2>
    </div>
  );
}

WeatherDisplay.propTypes = {
  temp: PropTypes.number,
};

WeatherDisplay.defaultProps = {
  temp: 0,
};

export default WeatherDisplay;
