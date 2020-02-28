import React from 'react';

 function writeForm(props) {
     return(
    <div>
        <h2>고객 추가</h2>

        <form onSubmit={props.handleSubmit}>
            <label>프로필 이미지 : </label>
            <input type="file" name="file" onChange={props.handleFileChange} /><br/>
            <label>이름 : </label>
            <input name="userName" type="text" onChange={props.handleChange} />
            <br/>
            <label>생년월일 : </label>
            <input name="birthday" type="text" onChange={props.handleChange} />
            <br/>
            <label>성별 : </label>
            <input name="gender" type="text" onChange={props.handleChange} />
            <br/>
            <label>직업 : </label>
            <input name="job" type="text" onChange={props.handleChange} />
            <br/>
            <br/>
            <button type="submit">추가</button>
        </form>
    </div>
    );
}

export default writeForm;