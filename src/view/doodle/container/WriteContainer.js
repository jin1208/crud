import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions';

import WriteForm from '../component/WriteForm';

class WriteContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    };

    handleChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleFileChange = (e) => {
      this.setState({
          file: e.target.files[0],
          fileName: e.target.value
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const form = this.state;
      this.props.submitButton(form);
      this.props.history.push('/Doodle/List');
    }

    render() {
        console.log(this.state);
        return(
            <div>
            <WriteForm 
            handleFileChange = {this.handleFileChange}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            fileName={this.state.fileName
              ? this.state.fileName
              : `fileUpload`
            }
            />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.write.data,
        error: state.write.error
      }
    }
  
const mapDispatchToProps = (dispatch) => {
return {
        submitButton : (form) => {
        dispatch({type: actions.WRITE, payload : form});
        },
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(WriteContainer);