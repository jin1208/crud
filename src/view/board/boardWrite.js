import React from 'react';
//import {post} from 'axios';

class boardWrite extends React.Component {
    state = {};

        handleValueChange = (e) => { 
            this.setState({ 
                [e.target.name]: e.target.value
            }) 
            console.log(this.state);
        }

            render() {
                return (
                <form method="post">
                <h1>고객 추가</h1>
                이름: <input type="text" name="userName" onChange={this.handleValueChange} /><br/>
                생년월일: <input type="text" name="birthday" onChange={this.handleValueChange} /><br/>
                성별: <input type="text" name="gender" onChange={this.handleValueChange} /><br/>
                직업: <input type="text" name="job" onChange={this.handleValueChange} /><br/>
                <button type="submit">추가</button>
                </form>
                )
            }
}
export default boardWrite