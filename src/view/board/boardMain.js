import React, { Component } from 'react';
import BoardList from './boardList';
import BoardWrite from './boardWrite';


class boardMain extends Component { 
    
    state = { list : [] };

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
            <h1>BoardList</h1>
            {
            data.list.map(row => {
                return (
                    <BoardList 
                    id={row.id} 
                    image={row.image} 
                    name={row.name} 
                    birthday={row.birthday} 
                    gender={row.gender} 
                    job={row.job}
                    createdDate={row.createdDate}
                    isDeleted={row.isDeleted}
                    userId={row.userId}
                    />
                ) 
            })
            } 
            <a href="/list"><h2>ㅗ</h2></a>
            <BoardWrite />
        </div>
        ); 
    
    }

} export default boardMain;
