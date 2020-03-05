import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { theme , drawerWidth , styles } from './view/styles/Main';
import Header from './view/Template/Header';
import Menu from './view/Template/Menu';
import Footer from './view/Template/Footer';
import WriteContainer from './view/doodle/container/WriteContainer';
import ListContainer from './view/doodle/container/ListContainer';
import SearchContainer from './view/doodle/container/SearchContainer';
import Paperbase from './view/uiExample/Paperbase';
import Main from './view/Template/Main';

import { ThemeProvider, withStyles } from '@material-ui/core/styles';
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
            <Route exact path="/" component={Main}/>
            <Route exact path="/Doodle/Write" component={WriteContainer}/>
            <Route exact path="/Doodle/List" component={ListContainer}/>
            <Route exact path="/Doodle/Search" component={SearchContainer}/>
            <Route exact path="/Doodle/Paperbase" component={Paperbase}/>
            </switch>
            </main>
              <footer className={classes.footer}> <Footer /> </footer>
            </div>            
          </div>
        </ThemeProvider>
        </Router>
      );
    }
}

export default withStyles(styles)(App);