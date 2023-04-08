import React from 'react'

function HistoryItem({url}) {

  const handleCategoryChange = (e) =>{
    setCategory(e.target.value)
  }

  return (
    <div>
      {url}
      <select onChange={handleCategoryChange}></select>
      </div>
  )
}

export default HistoryItem