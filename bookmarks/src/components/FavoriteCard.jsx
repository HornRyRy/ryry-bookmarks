import React from 'react'
import { useState } from 'react'

function FavoriteCard({ favorite }) {

const handleDeleteFavorite = (e) =>{
  console.log("Delete favorite button clicked")

}

const handleUpdateFavCategory = (e) =>{
  console.log("Category Change button clicked")
}


  return (
    <div>
      {favorite.url} 
      <button type='button' onClick={handleDeleteFavorite}>Delete</button>
      <button type='button' onClick={handleUpdateFavCategory}>Category Change</button>
      </div>
  )
}

export default FavoriteCard