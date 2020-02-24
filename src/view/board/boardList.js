import React from 'react';

function boardList(props) {
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
    </tr>
    )
}

export default boardList;
