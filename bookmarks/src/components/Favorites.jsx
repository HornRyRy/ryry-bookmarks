import React from "react";
import { useState } from "react"

function Favorites(galleries, setGalleries) {


  const initialForm = {
    catName: "",
    description: "",
    
  }

  const [currentCat, setCurrentCat] = useState()
  const [form, setForm] = useState(initialForm)

  let categories = [
    { label: "uncategorized"},
    { label: "articles"},
    { label: "canned fruit"}
  ]

  function handleSubmit(e){
    e.preventDefault()
    

  }

  const handleCatChange = (e) =>{
    setCurrentCat(e.target.value)
  }


  return (
    <div>
      <h3>Favorites</h3>
      <h2>Select a Category</h2>
      <h3>Current Category is: {currentCat}</h3>
      <form onSubmit={handleSubmit}>
        
        
        <select onChange={handleCatChange}>
      <option value="Select a category">Select a Category</option>
      {categories.map((cat) => <option value={cat.label} key={cat.label}>{cat.label}</option>)}
        </select>
      </form>
    </div>
    
  );
}

export default Favorites;
