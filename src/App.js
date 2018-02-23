import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import styles from './App.css';
import { loadInitialAction } from './actions/wordActions'

// Routes
import HomeContainer from './Routes/HomeContainer'
import QuizContainer from './Routes/QuizContainer'
import NoMatch from './Routes/NoMatch'

// UI
import MenuLink from './ui/MenuLink'

class App extends Component {
  componentDidMount() {
    import('./api/words.json').then(response => {
      this.props.initialLoad(response)
    })
  }

  render() {
    return (
      <Router>
        <div className={styles.App}>
          <header className={styles.AppHeader}>
            <ul>
              <MenuLink to="/" exact={true} >Go Home</MenuLink>
              <MenuLink to="/test">Testing Page</MenuLink>
            </ul>
          </header>
          <div className={styles.AppIntro}>
            <Switch>
              <Route path="/" exact component={HomeContainer} />
              <Route path="/test" component={QuizContainer} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  (state) => {
    return {}
  },
  (dispatch) => {
    return {
      initialLoad: (state) => dispatch(loadInitialAction(state))
    }
  }
)(App);
