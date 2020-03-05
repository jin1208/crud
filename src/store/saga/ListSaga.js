import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";
 
function* fetchListSaga(action) {
        const json = {
            name: action.payload
            }
        const { data } = yield call([axios, 'get'], '/list', json);

    try {
        yield put(actions.listSuccess(data));
    } catch (error) {
        yield put(actions.listFail(error.response));
    }
}
 
export default function* watchList() {
    yield takeEvery(actions.LIST, fetchListSaga);
}