import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import './App.css';

// Routes
import HomeContainer from './Routes/HomeContainer'
import Testing from './Routes/Testing'
import NoMatch from './Routes/NoMatch'

// UI
import A from './ui/A'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ul>
              <A to="/" exact={true} >Go Home</A>
              <A to="/test">Testing Page</A>
            </ul>
          </header>
          <Switch className="App-intro">
            <Route path="/" exact component={HomeContainer} />
            <Route path="/test" component={Testing} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
