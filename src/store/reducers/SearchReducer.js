import * as actions from '../actions'
 
const initState = {
  data: []
}
// list map은 array.map이기 때문에 초기값을 array로 지정
 
export const reducer = (state=initState, action) => {
  switch(action.type){
    case actions.SEARCH:
      return {
        ...state,
        payload: action.payload
      }
    case actions.SEARCH_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case actions.SEARCH_FAIL:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}