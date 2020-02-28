import { spawn } from "redux-saga/effects";
import watchSearch from './searchSaga';
import watcher from './saga';
//각 이벤트를 감시하는 saga, 감지하고 적용시킨다.
export default function* rootSaga() {
  yield spawn(watchSearch);
  yield spawn(watcher);
}