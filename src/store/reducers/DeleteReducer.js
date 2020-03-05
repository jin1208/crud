import * as actions from '../actions'
 
const initState = {
  data: {}
}
 
export const reducer = (state=initState, action) => {
  switch(action.type){
    case actions.DELETE:
      return {
        ...state,
        payload: action.payload
      }
    case actions.DELETE_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case actions.DELETE_FAIL:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}