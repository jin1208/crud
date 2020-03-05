import React from 'react';
import {connect} from 'react-redux';
 
import * as actions from '../../../store/actions';
import styles from '../../styles/Content';

import ListForm from '../component/ListForm';

import {TableRow} from "@material-ui/core";
import {TableCell} from "@material-ui/core";
import {CircularProgress} from "@material-ui/core";



class ListContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          completed : 0,
        }
    };

    progress = () => {
      const {completed} = this.state;
      this.setState({
        completed: completed >= 100 ? 0 : completed + 1
      });
    };

    refresh = (e) => {
      this.setState({
        completed : 0,
      })
      this.props.WriteList();
    }

    componentWillMount() {
      this.refresh();
    }

    componentDidMount() {
      this.props.WriteList();
    }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.data.length !== this.props.data.length) {
  //   this.setState({
  //     list : this.props.data
  //   });
  //   }
  //   // state로 받을 경우 DidUpdate에서 setState
  // }

    render() {
        return(
            <div>
              {
                this.props.data ?
                <ListForm list={this.props.data} refresh={this.refresh} />
                :
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className={styles.progress} variant="determinate" value={this.state.completed} />
                  </TableCell>
                </TableRow>
              }
          </div>
        )
    }

}

const mapStateToProps = (state) => {
  return {
      data : state.list.data,
      error: state.list.error
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
      WriteList : () => {
        dispatch({type: actions.LIST, payload : ''});
      },
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ListContainer);