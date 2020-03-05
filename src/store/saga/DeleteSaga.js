import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";
 
function* fetchDeleteSaga(action) {
    // data Delete example
    //     yield call([axios, 'delete'], '/list/' + id);
    
    //data isDelete를 update
    const id = action.payload;
    yield call([axios, 'put'], '/list/' + id);

    const { data } = 'delete success';
    try {
        yield put(actions.deleteListSuccess(data));
    } catch (error) {
        yield put(actions.deleteListFail(error.response));
    }
}

export default function* watchDelete() {
    yield takeEvery(actions.DELETE, fetchDeleteSaga);
}