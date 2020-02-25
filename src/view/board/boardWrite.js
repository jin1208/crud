import React from 'react';
import axios from 'axios';

class boardWrite extends React.Component {
    state = {
        file: {}
    };

        handleChange = (e) => { 
            this.setState({ 
                [e.target.name]: e.target.value
            });
        }
        
        handleFileChange = (e) => {
            this.setState({
                file: e.target.files[0]
            });
        }

        handleSubmit = (e) => {
            const formData = new FormData();
            formData.append('image', this.state.file)
            formData.append('name', this.state.userName)
            formData.append('birthday', this.state.birthday)
            formData.append('gender', this.state.gender)
            formData.append('job', this.state.job)
                const config = {
                headers: {
                'Content-type': 'multipart/form-data; boundary="Boundary"'
                }
                }
                axios.post('/add', formData, config)
                .then((res) => {
                    console.log("axios Success : " +res)
                }).catch((err) => {
                    console.error("axios Error : " + err)
                });
        }

            
            render() {
                return (
                <form onSubmit={this.handleSubmit}>
                <h1>고객 추가</h1>
                프로필 이미지: <input type="file" name="file" onChange={this.handleFileChange} /><br/>
                이름: <input type="text" name="userName" onChange={this.handleChange} /><br/>
                생년월일: <input type="text" name="birthday" onChange={this.handleChange} /><br/>
                성별: <input type="text" name="gender" onChange={this.handleChange} /><br/>
                직업: <input type="text" name="job" onChange={this.handleChange} /><br/>
                <button type="submit">추가</button>
                </form>
                )
            }
}
export default boardWrite