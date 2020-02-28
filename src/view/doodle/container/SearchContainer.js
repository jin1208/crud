import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
 
import Search from '../component/Search';
import SearchResult from '../component/SearchResult';
 
import * as actions from '../../../store/actions';
 
class SearchContainer extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
 
  // arrow function으로 작성하면 bind(this) 할 필요없다 
  onChanageInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  render() {
    return (
      <div>
        <Search 
          name={this.state.name}
          onSearch={this.props.onSearch}
          onChangeInput={this.onChanageInput}
        />
        { 
          this.props.error?<div>Something wrong!</div>
          :
          <SearchResult 
            data={this.props.data}
          />
        }
        <ul>
            <li>
              <Link to="/Doodle/axios">axiosExample</Link>
            </li>
            <li>
              <Link to="/Doodle/search">reduxExample</Link>
            </li>
            <li>
              <Link to="/">mainExample</Link>
            </li>
        </ul>
      </div>
    )
  }
}
 
const mapStateToProps = (state) => {
  console.log('stateProps' + state);
  return {
    data : state.search.data,
    error: state.search.error
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (text) => {
      console.log('dispatch.payload : ' + text);
      dispatch({type: actions.SEARCH, payload: text});
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)(SearchContainer);