import React from 'react'

function HistoryItem({url}) {

  const handleCategoryChange = (e) =>{
    setCategory(e.target.value)
  }

  return (
    <div>
      {url}
      <div></div>
      <select onChange={handleCategoryChange}>
        <option value="select-a-category">Select a Category</option>
      </select>
      
      </div>
  )
}

export default HistoryItem