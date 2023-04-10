import React, { useEffect } from "react";
import { useState } from "react";
import FavoriteCard from "./FavoriteCard";

function Favorites() {
  const initialForm = {
    catName: "",
    description: "",
  };

  const [currentCat, setCurrentCat] = useState();
  const [form, setForm] = useState(initialForm);

  const [myGalleries, setMyGalleries] = useState();

  let categories = [
    { label: "uncategorized" },
    { label: "articles" },
    { label: "canned fruit" },
  ];

  // Fav State

  const initialFavForm = {
    name: "",
    url: "",
    description: "",
    //gallery or category here: ""
  };
  const [favForm, setFavForm] = useState(initialFavForm);

  const handleFavFormChange = (e) => {
    setFavForm({ ...favForm, [e.target.name]: e.target.value });
  };

  const handleFavoriteSubmit = (e) => {
    e.preventDefault();
  };

  // GET Favorites

  const [myFavorites, setMyFavorites] = useState([])

  useEffect(() => {
    fetch(`api/favorites`).then((res) => {
      if (res.ok) {
        res.json().then((data) => setMyFavorites(data));
        console.log("favorites fetch")
      } else {
        console.log("errors -favorites fetch");
        // res.json().then(json => setErrors(json["errors"]))
      }
    });
  }, []);

  const renderMyFavorites = myFavorites.map(favorite =>{
    <FavoriteCard key={favorite.id} favorite={favorite}/>
  })

  // UPDATE Favorites

  // CREATE Favorites

  // DELETE Favorites


  // GET GALLERIES (aka categories)

  useEffect(() => {
    fetch(`/galleries`).then((res) => {
      if (res.ok) {
        res.json().then((data) => setMyGalleries(data));
      } else {
        console.log("errors -galleries fetch");
        // res.json().then(json => setErrors(json["errors"]))
      }
    });
  }, []);

  function handleCategorySubmit(e) {
    e.preventDefault();
  }

  const handleCatChange = (e) => {
    setCurrentCat(e.target.value);
  };

  const handleAddCategory = (e) => {};

  return (
    <div>
      <h3>Favorites</h3>
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

        <div>
          <input
            onChange={handleAddCategory}
            type="text"
            name="category_name"
            placeholder="enter new category"
          />
        </div>

        <div></div>
        <input
          type="text"
          name="category_description"
          placeholder="description of category"
        />
        <button type="submit">Add Category</button>
      </form>

      <form onSubmit={handleFavoriteSubmit}>
        <h3>Add Favorites Here</h3>
        <input type="text" name="url" placeholder="paste url here" />
        <div>
          <input type="text" name="category" placeholder="categoy" />
        </div>
        <button type="submit">Add Favorite</button>
      </form>

      <div>
        <h3>Existing Favorites</h3>
      </div>
    </div>
  );
}

export default Favorites;
