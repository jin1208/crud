import * as actions from '../actions'
 
const initState = {
  data: {}
}
 
export const reducer = (state=initState, action) => {
  switch(action.type){
    case actions.WRITE:
      return {
        ...state,
        payload: action.payload
      }
    case actions.WRITE_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case actions.WRITE_FAIL:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}