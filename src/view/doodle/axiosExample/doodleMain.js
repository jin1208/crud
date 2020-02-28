import React, { Component } from 'react';
import DoodleList from './doodleList';
import DoodleWrite from './doodleWrite';

class doodleMain extends Component { 
    
    state = { list : [] };

    stateRefresh = () => {
        this.setState({
            list : []
        })
        this.callApi();
      }

    callApi = () => {
        return fetch('/customer')
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
                    <DoodleList 
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
            <a href="/list"><h2>ㅗ</h2></a>
            <DoodleWrite />
        </div>
        ); 
    
    }

} export default doodleMain;
