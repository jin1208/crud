import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import { withStyles } from '@material-ui/core/styles';

import styles from '../../styles/Content';

function SearchForm(props) {
    const { classes } = props;

    return(
    <Paper className={classes.paper}>
    <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <SearchIcon className={classes.block} color="inherit" />
          </Grid>
          <Grid item xs>
            <TextField
              name="search"
              onChange={props.handleChange}
              onKeyPress={props.handleKeyPress}
              fullWidth
              placeholder="Search by Customers userId, gender, name, or birthday"
              InputProps={{
                disableUnderline: true,
                className: classes.searchInput,
              }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" className={classes.addUser} 
            onClick={props.search} >
              Search
            </Button>
            <Tooltip title="Reload">
              <IconButton onClick={props.reload} >
                <RefreshIcon className={classes.block} color="inherit" />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </Paper>
  );
}

export default withStyles(styles)(SearchForm);