import React from "react";
import { useState, useEffect } from "react";

function Categories({ setUserCategories, updateCatState, userCategories}) {


  const initialCatForm = {
    name: "",
    description: "",
    previewPic: "",
  };

  const [catForm, setCatForm] = useState(initialCatForm);
 
  



  // CREATE Categories

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    const config = {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(catForm), // define cat form
    };
    fetch('/api/galleries', config)
    .then((data) => {

      updateCatState(data)
      
    })
  };

  


  const handleAddCategory = (e) => {
    setCatForm({ ...catForm, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Categories Route</h3>
      <h2>Select a Category</h2>
      
      <form onSubmit={handleCategorySubmit}>


        <div>- - - - - - </div>

        <input
          onChange={handleAddCategory}
          type="text"
          name="name"
          placeholder="name of category"
          value={catForm.name}
        />

        <div></div>
        <input
          onChange={handleAddCategory}
          type="text"
          name="description"
          placeholder="description of category"
          value={catForm.description}
        />
        <div></div>
        <input
          onChange={handleAddCategory}
          type="text"
          name="previewPic"
          placeholder="preview pic url"
          value={catForm.previewPic}
        />
        <div></div>
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
}

export default Categories;
