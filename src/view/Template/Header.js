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

function Header(props) {
  const { classes, onDrawerToggle } = props;
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = event => {
    setAuth(false);
  };

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
                  control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
                  label={auth ? 'Login' : 'Logout'}
                />
              </FormGroup>
            </Grid>
            <Grid item>
            {auth && (
              <div>
              <IconButton color="inherit" className={classes.iconButtonAvatar} 
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              >
                <Avatar alt="My Avatar" />
              </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
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
                    onClose={handleClose}
                  >
                <Link className={classes.link} href="/Doodle/Paperbase" variant="body2">
                  <MenuItem onClick={handleClose} value='menu001'>UIEXAMPLE</MenuItem>
                </Link>
                <Link className={classes.link} href="/Doodle/Search" variant="body2">
                  <MenuItem onClick={handleClose} value='menu002'>고객관리</MenuItem>
                </Link>
                <Link className={classes.link} href="/" variant="body2">
                  <MenuItem onClick={logout} value='menu003'>로그아웃</MenuItem>
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

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);