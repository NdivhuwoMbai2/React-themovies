import React from 'react'
import {Product} from '../'
import Movie from '../Movie';

const ProductList =
  ({ products, compare }) =>
  
    <div className="row mt-3">
      {
        
      products.map(movie =>
        <Movie
          key={movie.id}
          product={movie} 
        />
        )
      }
  </div>;

export default ProductList
