import React from 'react'
import { useState } from 'react'
import Favorites from './Favorites'

function FavoriteCard({ favorite, onDelete, userCategories, handleUrlChange }) {

const handleDeleteFavorite = (e) =>{
  console.log("Delete favorite button clicked")
  onDelete(favorite.id)

  
}

const handleUpdateFavCategory = (e) =>{
  console.log("Category Change button clicked")
}




  return (
    <div>
      {favorite.url} 
      
      {/* {favorite.gallery_favorites[0].gallery.name} */}
      <button type='button' onClick={handleDeleteFavorite}>Delete</button>
      <button type='button' onClick={handleUpdateFavCategory}>Category Change</button>
      <button type='button' onClick={handleUrlChange}>URL change</button>
      <form onSubmit={handleUrlChange}>
      <input type="text" name="url" placeholder="Url Change" />
      </form>
      </div>
  )
}

export default FavoriteCard