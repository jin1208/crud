import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Container from './view/doodle/container/container';
import doodleMain from './view/doodle/axiosExample/doodleMain';
import SearchContainer from './view/doodle/reduxExample/SearchContainer';

class App extends Component {
  render() {
      return (
        <Router>
          <div>
            <Route exact path="/" component={Container}/>
            <Route exact path="/Doodle/search" component={SearchContainer}/>
            <Route exact path="/Doodle/axiosExample" component={doodleMain}/>
          </div>
        </Router>
      );
    }
}

export default App;