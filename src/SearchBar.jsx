import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipCode: props.zipCode,
    };
  }

  render() {
    return (
      <form style={{ textAlign: 'center' }}>
        <label htmlFor="zipCode">
          Enter Zip Code
          <input
            type="text"
            name="zipCode"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  zipCode: PropTypes.string,
};

SearchBar.defaultProps = {
  zipCode: '00000',
};

export default SearchBar;
