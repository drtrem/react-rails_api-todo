import React, { Component } from 'react';
import ProjectsContainer from './components/containers/ProjectsContainer';
import Sign from './components/views/Sign';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
          <Sign />
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