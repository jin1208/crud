import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";
 
function* fetchSaga(action) {
    const config = {
            headers: {
            'Content-type': 'multipart/form-data; boundary="Boundary"'
            }
        }
    const formData = new FormData();
      formData.append('image', action.payload.file)
      formData.append('name', action.payload.userName)
      formData.append('birthday', action.payload.birthday)
      formData.append('gender', action.payload.gender)
      formData.append('job', action.payload.job)
        axios.post('/insert', formData, config)
                .catch((err) => {
                    console.error("axios Error : " + err)
                });

        const { data } = yield call([axios, 'get'], '/list');

    try {
        yield put(actions.writeSuccess(data));
    } catch (error) {
        yield put(actions.writeFail(error.response));
    }
}

export default function* watcher() {
    yield takeEvery(actions.WRITE, fetchSaga);
}