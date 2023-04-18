import React, { useEffect } from "react";
import { useState } from "react";
import FavoriteCard from "./FavoriteCard";

function Favorites({userCategories, setUserCategories, updateCatState}) {



  const initialForm = {
    catName: "",
    description: "",
  };



  const [form, setForm] = useState(initialForm);
  const [currentCat, setCurrentCat] = useState("uncategorized");
 
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
  
  
  
  // CREATE Favorites
  
  const handleFavoriteSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(favForm)
    }
    fetch('/api/favorites', config)
    .then((data) =>{
      setMyFavorites(...myFavorites, data)
    })
  };
  
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
  
  // DELETE Favorites
  
  const onDelete = (favoriteObj) =>{
    
    
    const config = {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    }
    fetch(`api/favorites/${favoriteObj.id}`, config)
    .then(res => {
      if(res.ok){
        setMyFavorites(myFavorites.filter(fav => fav.id !== favoriteObj.id))
      }
    })
    
  }
  
  const handleCatChange = (e) => {
    setCurrentCat(e.target.value);
  };
  
  
  const renderMyFavorites = myFavorites.map(favorite => {
    return <FavoriteCard key={favorite.id} favorite={favorite} onDelete={onDelete}/>
  })

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
          {userCategories.map((cat) => (
            <option value={cat.name} key={cat.name}>
              {cat.name}
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
