import React, {memo} from 'react'
 
const SearchResult = (props) => {
  const viewItems = (data) => {
    console.log('searchresult : ' + data
    );
    if(!data.data){
      console.log('data = ' + data);
      return 'please search'
    } else {
      return <div>
        {data.data}
      </div>
    }
  }
 
  return (
    <div>
      {viewItems(props.data)}
    </div>
  )
  
}
 
export default memo(SearchResult);