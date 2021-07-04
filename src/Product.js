/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({
  id, title, price, image, rating,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_) => (<p>⭐</p>))}
        </div>
      </div>
      <img src={image} alt="" />

      <button className="button" type="button" onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
