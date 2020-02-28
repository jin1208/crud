import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Container from './view/doodle/container/container';
import AxiosContainer from './view/doodle/container/axiosContainer';
import SearchContainer from './view/doodle/container/SearchContainer';

class App extends Component {
  render() {
      return (
        <Router>
          <div>
            <Route exact path="/" component={Container}/>
            <Route exact path="/Doodle/search" component={SearchContainer}/>
            <Route exact path="/Doodle/axios" component={AxiosContainer}/>
          </div>
        </Router>
      );
    }
}

export default App;