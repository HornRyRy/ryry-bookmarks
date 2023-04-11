import React from 'react'
import { useState } from 'react'

function FavoriteCard({ favorite }) {
  return (
    <div>{favorite.url}</div>
  )
}

export default FavoriteCard