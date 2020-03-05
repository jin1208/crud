import { combineReducers } from 'redux';
import {reducer as list} from './ListReducer';
import {reducer as write} from './WriteReducer';
import {reducer as deleteList} from './DeleteReducer';
import {reducer as search} from './SearchReducer';
 
 //모든 액션이 dispatch 될때마다 액션과 현재상태를 받는 단순함수 reducer
const rootReducer = combineReducers({
  list,
  write,
  deleteList,
  search,
})
 
export default rootReducer