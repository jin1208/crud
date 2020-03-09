import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/Header';

// function Header(props) {
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth : false
    }
  }

  handleChange = (event) => {
      this.setState({
        auth : event.target.checked,
      })
    };
  handleMenu = (event) => {
    this.setState({
      anchorEl : event.currentTarget,
    })
  };
  handleClose = () => {
    this.setState({
      anchorEl : null,
    })
  };
  logout = (event) => {
    this.setState({
      auth : false,
    })
  };
  switch = (e) => {
    if(!this.state.auth) {
      console.log('login page');
    }
  }
      render() {
        const { classes, onDrawerToggle } = this.props;
        const open = Boolean(this.state.anchorEl);

        return (
          <React.Fragment>
            <AppBar color="transparent" position="sticky" elevation={0}>
              <Toolbar>
                <Grid container spacing={3} alignItems="center">
                  <Hidden smUp>
                    <Grid item>
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={onDrawerToggle}
                        className={classes.menuButton}
                      >
                        <MenuIcon />
                      </IconButton>
                    </Grid>
                  </Hidden>
                  <Grid item lg />
                  <Grid item>
                    <Link className={classes.link} href="/Doodle/Paperbase" variant="body2">
                      Go to Example
                    </Link>
                  </Grid>
                  <Grid item>
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch checked={this.state.auth} onChange={this.handleChange} aria-label="login switch" />}
                        label={this.state.auth ? 'Login' : 'Logout'}
                        onClick={this.switch}
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item>
                  {this.state.auth && (
                    <div>
                    <IconButton color="inherit" className={classes.iconButtonAvatar} 
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    >
                      <Avatar alt="My Avatar" />
                    </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorEl={this.state.anchorEl}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={open}
                          onClose={this.handleClose}
                        >
                      <Link className={classes.link} href="/Doodle/Paperbase" variant="body2">
                        <MenuItem onClick={this.handleClose} value='menu001'>UIEXAMPLE</MenuItem>
                      </Link>
                      <Link className={classes.link} href="/Doodle/Search" variant="body2">
                        <MenuItem onClick={this.handleClose} value='menu002'>고객관리</MenuItem>
                      </Link>
                      <Link className={classes.link} href="/" variant="body2">
                        <MenuItem onClick={this.logout} value='menu003'>로그아웃</MenuItem>
                      </Link>
                    </Menu>
                    </div>
                    )}
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </React.Fragment>
        );
    }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);