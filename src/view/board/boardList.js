import React, { Component } from 'react';


class boardList extends Component { 
    
    state = {
        list : []
    };

    call_api = () => {
        return fetch('/customer')
                .then(res => res.json())
                .then(data => this.setState({ list : data }))
                .catch(err => {
                    console.error(err);
                })
    }

    componentDidMount() {
        this.call_api();
    }

    render() { 
        const data = this.state;
        return (
        <div> 
            <h1>옆자리 극혐에서 살짝 혐 정도로 바뀜</h1>
            {
            data.list.map(data => { return (
                <li>
                    <ul>{data.id} </ul>
                    <ul>{data.image}</ul>
                    <ul>{data.name}</ul>
                    <ul>{data.birthday}</ul>
                    <ul>{data.gender}</ul>
                    <ul>{data.job}</ul>
                    <ul>{data.createdDate}</ul>
                </li>
                )
            })
            } 
            <a href="www.옆자리혐.com"><h2>ㅗ</h2></a>
        </div>
        ); 
    
    }

} export default boardList;
