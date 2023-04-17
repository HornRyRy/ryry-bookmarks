import React, { useEffect } from "react";
import { useState } from "react";
import FavoriteCard from "./FavoriteCard";

function Favorites() {


  let categories = [
    { label: "uncategorized" },
    { label: "articles" },
    { label: "canned fruit" },
  ];


  const initialForm = {
    catName: "",
    description: "",
  };



  const [form, setForm] = useState(initialForm);

 
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
  
  const renderMyFavorites = myFavorites.map(favorite => {
    return <FavoriteCard key={favorite.id} favorite={favorite}/>
  })
  
  // UPDATE Favorites
  
  const onUpdate = (favoriteObj) => {
    const config ={
      method: "PATCH",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(favoriteObj)
      
    }
    fetch(`api/favorites/${favoriteObj.id}`, config)
    .then((res) => res.json())
    .then(data => {
      const updatedFavorites = myFavorites.map(fav => fav.id === data.id ? data : fav(updatedFavorites))
    })
    
    
  }
  
  // CREATE Favorites
  
  const handleFavoriteSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(favForm)
    }
    
  };
  
  
  // DELETE Favorites

  const onDelete = (favoriteObj) =>{
    setMyFavorites(myFavorites.filter(fav => fav.id !== favoriteObj.id))

    const config = {
      method: "DELETE"
    }
    fetch(`api/favorites/${favoriteObj.id}`, config)

  }

  const handleCatChange = (e) => {
    setCurrentCat(e.target.value);
  };



  return (
    <div>
      <h3>Favorites</h3>
      

      <form onSubmit={handleFavoriteSubmit}>
        <h3>Add Favorites Here</h3>
        <input type="text" name="url" placeholder="paste url here" />

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
          <button type="submit">Add Favorite</button>
      </form>

      <div>
        <h3>Existing Favorites</h3>
      </div>
      {renderMyFavorites}
    </div>
  );
}

export default Favorites;
