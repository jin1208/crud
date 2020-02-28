import React from 'react';
import {connect} from 'react-redux';
 
import * as actions from '../../../store/actions';

import WriteForm from '../component/writeForm';
import ListForm from '../component/listForm';

class container extends React.Component {
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
          file: e.target.files[0]
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const form = this.state;
      this.props.submitButton(form);
    }

  componentDidUpdate(prevProps) {
    if (prevProps.data.length !== this.props.data.length) {
    this.setState({
      list : this.props.data
    });
    }
  }

    render() {
        return(
            <div>
            <WriteForm 
            handleFileChange = {this.handleFileChange}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            />
                    {this.props.error?
                    <div>Something wrong!</div>
                    :
                    this.state.list?
                      this.state.list.map((index) => {
                          return (
                            <ListForm key={index.id} 
                            id={index.id} 
                            image={index.image} 
                            name={index.name} 
                            birthday={index.birthday} 
                            gender={index.gender} 
                            job={index.job}
                            userId={index.userId}
                            />
                            );
                      })
                    :
                    <div>ListForm</div>
                    }
          </div>
        )
    }

}

const mapStateToProps = (state) => {
  return {
      data : state.reduce.data,
      error: state.reduce.error
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
        submitButton : (form) => {
        dispatch({type: actions.WRITE, payload : form});
        }
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(container);