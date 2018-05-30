import React, { Component } from 'react';
import './App.css';
import ProjectsContainer from './components/ProjectsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Hiplyst!</h1>
        </header>
        <ProjectsContainer />
      </div>
    );
  }
}

export default App;