import React from 'react';
import axios from 'axios';

class doodleDelete extends React.Component {
    deleteCustomer(id) {
        axios.delete('/delete/' + id)
            .then((res) => {
                console.log("axios Success : ")
                this.props.stateRefresh();
            }).catch((err) => {
                console.error("axios Error : " + err)
            });
    }

    render() {
        return (
            <button onClick={(e) => {
                this.deleteCustomer(this.props.id)
            }}>삭제</button>
        )
    }
}

export default doodleDelete;