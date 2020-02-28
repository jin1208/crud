export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';
export const WRITE = 'WRITE';
export const WRITE_SUCCESS = 'WRITE_SUCCESS';
export const WRITE_FAIL = 'WRITE_FAIL';
 //store에 dispatch를 하기위한 액션
 //dispatch 라는 함수에는 액션을 파라미터로 전달. ex) dispatch(action)
export function search(payload){
  return {
    type: SEARCH,
    payload
  }
}
 
export function searchSuccess(data){
  return {
    type: SEARCH_SUCCESS,
    data
  }
}
 
export function searchFail(error){
  return {
    type: SEARCH_FAIL,
    error
  }
}

export function write(payload){
  return {
    type: WRITE,
    payload
  }
}

export function writeSuccess(data){
  return {
    type: WRITE_SUCCESS,
    data
  }
}
 
export function writeFail(error){
  return {
    type: WRITE_FAIL,
    error
  }
}
