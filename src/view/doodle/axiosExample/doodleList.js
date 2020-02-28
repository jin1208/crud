import React from 'react';
import DoodleDelete from './doodleDelete';

function doodleList(props) {
    return(
        <tr>
        <td>{props.id}</td>
        <td>{props.image}</td>
        <td>{props.name}</td>
        <td>{props.birthday}</td>
        <td>{props.gender}</td>
        <td>{props.job}</td>
        <td>{props.createdDate}</td>
        <td>{props.isDeleted}</td>
        <td>{props.userId}</td>
        <DoodleDelete id={props.id} stateRefresh={props.stateRefresh} /> 
    </tr>
    )
}

export default doodleList;
