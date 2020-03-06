import React from 'react';

import {connect} from 'react-redux';
import * as actions from '../../../store/actions';

import SearchListForm from '../component/SearchListForm';
import SearchForm from '../component/SearchForm';

import Typography from '@material-ui/core/Typography';

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
    this.setState({ });
    this.props.Search(this.state.search);
  }

  reload = (e) => {
    this.setState({
      search: ''
    });
  }

  componentWillMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <SearchForm handleChange={this.handleChange} handleKeyPress={this.handleKeyPress} 
        search={this.search} reload={this.reload} />
          {
            this.props.data ?
            <SearchListForm list={this.props.data} refresh={this.refresh} />
            :
            <Typography color="textSecondary" align="center">
              No Customers
            </Typography>
          }
          
      </div>
    );
  }
}

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