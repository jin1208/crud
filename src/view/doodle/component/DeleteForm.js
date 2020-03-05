import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import styles from '../../styles/Content';
import * as actions from '../../../store/actions';

class DeleteForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    };

    delete = () => {
        this.props.Delete(this.props.id);
        this.props.refresh();
    }

    render() {
        return (
            <Button variant="contained" color="secondary" className={styles.addUser} type="button"
                  onClick={() => {this.delete(this.props.id)}}
                  >삭제</Button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.deleteList.data,
        error: state.deleteList.error
      }
    }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        Delete : (id) => {
          dispatch({type: actions.DELETE, payload : id});
        },
      }
    }
  
    export default connect(
      mapStateToProps,
      mapDispatchToProps
      )(DeleteForm);