import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";
 
function* fetchSearchSaga(action) {
        const search = action.payload;
        const { data } = yield call([axios, 'get'], '/list/' + search);
    try {
        yield put(actions.searchSuccess(data));
    } catch (error) {
        yield put(actions.searchFail(error.response));
    }
}
 
export default function* watchSearch() {
    yield takeEvery(actions.SEARCH, fetchSearchSaga);
}