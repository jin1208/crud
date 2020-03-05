import React from 'react';

import {connect} from 'react-redux';
import * as actions from '../../../store/actions';

import SearchForm from '../component/SearchForm';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';

import styles from '../../styles/Content';

class SearchContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  };

  handleChange = (e) => { 
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  handleKeyPress = (e) => {
    if (e.charCode === 13) { // enter key pressed
      e.preventDefault();
      this.search();
    } 
  }

  search = () => {
    this.props.Search(this.state.search);
  }

  refresh = (e) => {
    this.setState({
      completed : 0,
    })
    this.props.Search(this.state.search);
  }

  componentWillMount() {
    this.refresh();
  }

  render() {
    console.log(this.props.data);
    return (
      <Paper className={styles.paper}>
        <AppBar className={styles.searchBar} position="static" color="default" elevation={0}>
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <SearchIcon className={styles.block} color="inherit" />
              </Grid>
              <Grid item xs>
                <TextField
                  name="search"
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                  fullWidth
                  placeholder="Search by Customers userId, gender, name, or birthday"
                  InputProps={{
                    disableUnderline: true,
                    className: styles.searchInput,
                  }}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" className={styles.addUser} 
                onClick={() => {this.search()}} >
                  Search
                </Button>
                <Tooltip title="Reload">
                  <IconButton>
                    <RefreshIcon className={styles.block} color="inherit" />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div className={styles.contentWrapper}>
          {
            this.props.data ?
            <SearchForm list={this.props.data} refresh={this.refresh} />
            :
            <Typography color="textSecondary" align="center">
              No Customers
            </Typography>
          }
          
        </div>
      </Paper>
    );
  }
}

SearchContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
      data : state.search.data,
      error: state.search.error
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
      Search : (search) => {
        dispatch({type: actions.SEARCH, payload : search});
      },
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(SearchContainer);