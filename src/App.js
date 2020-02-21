import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
      return (
        <Router>
          <div>
            <Route exact path="/" component={App1}/>
            <Route exact path="/App1" component={App1}/>
            <Route exact path="/App2" component={App2}/>
            <Route exact path="/App3" component={App3}/>
            <Route exact path="/App4" component={App4}/>
            <Route exact path="/App5" component={App5}/>
            <Route exact path="/App6" component={App6}/>
          </div>
        </Router>
      );
    }
}

export default App;
