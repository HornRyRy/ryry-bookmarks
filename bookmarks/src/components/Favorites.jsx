import React from "react";
import { useState } from "react"

function Favorites(categories, setCategories) {


  const initialForm = {
    catName: "",
    description: "",
    
  }

  const [form, setForm] = useState(initialForm)


  function handleSubmit(e){
    e.preventDefault()
    

  }

  const handleAddChange = (e) =>{
    
  }


  return (
    <div>
      <h3>Favorites</h3>
      <h2>Add a Category</h2>
      <form onSubmit={handleSubmit}>
        <input
        onChange={handleAddChange} />
      </form>
    </div>
    
  );
}

export default Favorites;
