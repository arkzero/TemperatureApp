import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
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

export default SearchBar;
