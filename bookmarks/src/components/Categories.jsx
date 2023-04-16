import React from "react";
import { useState, useEffect } from "react";

function Categories() {

  let categories = [
    { label: "uncategorized" },
    { label: "articles" },
    { label: "canned fruit" },
  ];
  
  const [currentCat, setCurrentCat] = useState();
  const [userCategories, setUserCategories] = useState([])

  // GET Categories

  useEffect(() => {
    fetch(`api/galleries`).then((res) => {
      if (res.ok) {
        res.json().then((data) => setUserCategories(data));
        console.log("galleries/categories fetch")
        
      } else {
        console.log("errors -galleries/categories fetch");
        // res.json().then(json => setErrors(json["errors"]))
      }
    });
  }, []);

  // CREATE Categories

  


  function handleCategorySubmit(e) {
    e.preventDefault();
  }

  const handleCatChange = (e) => {
    setCurrentCat(e.target.value);
  };

  const handleAddCategory = (e) => {};

  return (
    <div>
      <h3>Categories Route</h3>
      <h2>Select a Category</h2>
      <h3>Current Category is: {currentCat}</h3>
      <form onSubmit={handleCategorySubmit}>
        <select onChange={handleCatChange}>
          <option name="dropDown" value="Select a category">
            Select a Category
          </option>
          {categories.map((cat) => (
            <option value={cat.label} key={cat.label}>
              {cat.label}
            </option>
          ))}
        </select>

        <div></div>
        <input
          onChange={handleAddCategory}
          type="text"
          name="category_description"
          placeholder="description of category"
        />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
}

export default Categories;
