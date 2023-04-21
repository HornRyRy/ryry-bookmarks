import React from "react";
import { useState } from "react";
import Favorites from "./Favorites";

function FavoriteCard({ favorite, onDelete, userCategories, myFavorites, setMyFavorites }) {
  const handleDeleteFavorite = (e) => {
    console.log("Delete favorite button clicked");
    onDelete(favorite.id);
  };

  const handleUpdateFavCategory = (e) => {
    console.log("Category Change button clicked");
  };

  //URL change flow

  const [urlForm, setUrlForm] = useState("");

  const handleUrlSubmit = (urlObj) => {
    urlObj.preventDefault();
    console.log("Url Submit button clicked");
    const config ={
      method: "PATCH",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(urlObj)

    }
    fetch(`api/favorites/${urlObj.id}`, config)
    .then((res) => res.json())
    .then(data => {
      // setMyFavorites(...myFavorites, data)
      const updateMyFavs = myFavorites.map(favorite => favorite.id === data.id ? data : favorite)
      setMyFavorites(updateMyFavs)
    })
  };

  const handleUrlFormChange = (e) => {
    // setUrlChangeForm({...urlChangeForm, [e.target.name]: e.target.value})
    setUrlForm({ ...urlForm, [e.target.name]: e.target.value });
    
  };

  return (
    <div>
      {favorite.url}

      {favorite.gallery_favorites[0]?.gallery.name}
      <button type="button" onClick={handleDeleteFavorite}>
        Delete
      </button>
      <button type="button" onClick={handleUpdateFavCategory}>
        Category Change
      </button>

      <form onSubmit={handleUrlSubmit}>
        <input
          type="text"
          name="url"
          placeholder="Url Change"
          onChange={handleUrlFormChange}
          value={urlForm.value}
        />
        <button type="submit" >
          URL change
        </button>
        <div>----------</div>
      </form>
    </div>
  );
}

export default FavoriteCard;
