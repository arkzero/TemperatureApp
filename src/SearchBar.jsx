import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipCode: props.zipCode,
    };
  }

  onFormSubmit(event) {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { zipCode } = this.state;

    onSubmit(zipCode);
  }

  render() {
    const { zipCode } = this.state;

    return (
      <form
        onSubmit={this.onFormSubmit}
        style={{ textAlign: 'center' }}>
        <label htmlFor="zipCode">
          Enter Zip Code
          <input
            type="text"
            name="zipCode"
            value={zipCode}
            onChange={(e) => this.setState({ zipCode: e.target.value })}
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  zipCode: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  zipCode: '00000',
};

export default SearchBar;
