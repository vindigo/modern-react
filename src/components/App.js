import React from 'react';
import SearchBar from './SearchBar.js';

class App extends React.Component {

  render() {
    return (
      <div className="ui container" style={{ marginTop: '1em' }}>
        <SearchBar />
      </div>
    )
  }
}

export default App;