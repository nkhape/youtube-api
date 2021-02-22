import React from 'react';

class SearchBar extends React.Component {
state = { term: '' };

onInputChange = (event) => {
  this.setState({ term: event.target.value });
};

onFormSubmit = (event) => {
  event.preventDefault();

  // TODO: make sure we call callback from parent component
};

  render () {
    return (
      <div className="search-bar ui segment">
        <form onSumbit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Find a Vid' 📽</label>
            <input
              type="text"
              placeholder="hallöchen"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
