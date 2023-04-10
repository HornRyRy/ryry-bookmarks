import React from "react";
import { useState } from "react"

function Favorites(categories, setCategories) {


  const initialForm = {
    catName: "",
    description: "",
    
  }

  const [currentCat, setCurrentCat] = useState()
  const [form, setForm] = useState(initialForm)


  function handleSubmit(e){
    e.preventDefault()
    

  }

  const handleCatChange = (e) =>{
    
  }


  return (
    <div>
      <h3>Favorites</h3>
      <h2>Select a Category</h2>
      <form onSubmit={handleSubmit}>
        
        
        <select onChange={handleCatChange}>
      <option value="Select a category">Select a Category</option>
      {categories.map((cat) => <option value={cat}></option>)}
        </select>
      </form>
    </div>
    
  );
}

export default Favorites;
