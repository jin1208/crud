import { combineReducers } from 'redux';
import {reducer as search} from './searchReducer';
import {reducer as reduce} from './reducer';
 
 //모든 액션이 dispatch 될때마다 액션과 현재상태를 받는 단순함수 reducer
const rootReducer = combineReducers({
  search,
  reduce
})
 
export default rootReducer