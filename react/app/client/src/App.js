import React, { Component } from 'react';
import './App.css';
import ProjectsContainer from './components/ProjectsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Simple todo list</h1>
              <ProjectsContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;