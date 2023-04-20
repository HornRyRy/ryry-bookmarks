import React from 'react'
import { useState } from 'react'

function FavoriteCard({ favorite, onDelete, userCategories }) {

const handleDeleteFavorite = (e) =>{
  console.log("Delete favorite button clicked")
  onDelete(favorite.id)

}

const handleUpdateFavCategory = (e) =>{
  console.log("Category Change button clicked")
}


  return (
    <div>
      {favorite.url} {favorite.galleries[0]?.name}
      <button type='button' onClick={handleDeleteFavorite}>Delete</button>
      <button type='button' onClick={handleUpdateFavCategory}>Category Change</button>
      </div>
  )
}

export default FavoriteCard