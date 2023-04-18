import React from "react";
import { useState, useEffect } from "react";

function Categories({userCategories, setUserCategories, updateCatState}) {


  const initialCatForm = {
    name: "",
    description: "",
    previewPic: "",
  };

  const [catForm, setCatForm] = useState(initialCatForm);
 
  

  // GET Categories

  useEffect(() => {
    fetch(`api/galleries`).then((res) => {
      if (res.ok) {
        res.json().then((data) => setUserCategories(data));
        console.log("galleries/categories fetch");
      } else {
        console.log("errors -galleries/categories fetch");
        // res.json().then(json => setErrors(json["errors"]))
      }
    });
  }, []);

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
      const newCategoryState = [...userCategories, data]
      setUserCategories(newCategoryState)
      updateCatState(newCategoryState)
      
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
