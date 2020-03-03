import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Container from './view/doodle/container/Container';
import AxiosContainer from './view/doodle/container/AxiosContainer';
import SearchContainer from './view/doodle/container/SearchContainer';
import Header from './view/Template/Header';
import Menu from './view/Template/Menu';
import Copyright from './view/Template/Footer';
import Templatebase from './view/Template/Paperbase';
import Paperbase from './view/uiExample/Paperbase';
import Content from './view/uiExample/Content';

import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import { theme , drawerWidth , styles } from './view/styles/Paperbase';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileOpen : false
    }
  }

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen : true
    })
  };

  render() {
    const { classes } = this.props;
    
      return (
        <Router>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <CssBaseline />
            <nav className={classes.drawer}>
              <Hidden smUp implementation="js">
              <Menu PaperProps={{ style: { width: drawerWidth } }} 
              variant="temporary" open={this.state.mobileOpen} onClose={this.handleDrawerToggle}
              />
              </Hidden>
              <Hidden xsDown implementation="css">
                <Menu PaperProps={{ style: { width: drawerWidth } }} />
              </Hidden>
            </nav>
            <div className={classes.app}>
              <Header onDrawerToggle={this.handleDrawerToggle} />
            <main className={classes.main}>
            <switch>
            <Route exact path="/" component={Content}/>
            <Route exact path="/main" component={Container}/>
            <Route exact path="/Template/Menu" component={Menu}/>
            <Route exact path="/Template/Paperbase" component={Templatebase}/>
            <Route exact path="/Doodle/Container" component={Container}/>
            <Route exact path="/Doodle/Search" component={SearchContainer}/>
            <Route exact path="/Doodle/Axios" component={AxiosContainer}/>
            <Route exact path="/Doodle/Paperbase" component={Paperbase}/>
            </switch>
            </main>
              <footer className={classes.footer}> <Copyright /> </footer>
            </div>            
          </div>
        </ThemeProvider>
        </Router>
      );
    }
}

export default withStyles(styles)(App);