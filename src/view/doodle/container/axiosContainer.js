import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AxiosList from '../component/axiosList';
import AxiosWrite from '../component/axiosWrite';

class doodleMain extends Component { 
    
    state = { list : [] };

    stateRefresh = () => {
        this.setState({
            list : []
        })
        this.callApi();
      }

    callApi = () => {
        return fetch('/list')
                .then(res => res.json())
                .then(data => this.setState({ list : data }))
                .catch(err => {
                    console.error(err);
                })
    }

    componentDidMount() {
        this.callApi();
    }

    render() { 
        const data = this.state;
        return (
        <div> 
            <h1>DoodleList</h1>
            {
            data.list.map(row => {
                return (
                    <AxiosList 
                    id={row.id} 
                    image={row.image} 
                    name={row.name} 
                    birthday={row.birthday} 
                    gender={row.gender} 
                    job={row.job}
                    createdDate={row.createdDate}
                    isDeleted={row.isDeleted}
                    userId={row.userId}
                    stateRefresh={this.stateRefresh} 
                    />
                    ) 
                })
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
            <AxiosWrite />
        </div>
        ); 
    
    }

} export default doodleMain;
