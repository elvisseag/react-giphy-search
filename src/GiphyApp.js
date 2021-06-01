import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GiphyApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  return (
    <>
      <h2>Giphy App</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />
      <ol>
        { 
          categories.map( (category) => (
            <GifGrid
              key={ category }
              category={ category }
            />
          ) )
        }
      </ol>
    </>
  )
}

export default GiphyApp;