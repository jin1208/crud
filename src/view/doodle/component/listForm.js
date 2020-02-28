import React from 'react';

function listForm(props) {
    return(
        <div>
        <label>{props.id}</label>
        <label>{props.image}</label>
        <label>이름 : </label>
        <label>{props.name}</label>
        <label>생년월일 : </label>
        <label>{props.birthday}</label>
        <label>성별 : </label>
        <label>{props.gender}</label>
        <label>직업 : </label>
        <label>{props.job}</label>
        <label>{props.userId}</label>
        </div> 
    )
}

export default listForm;
