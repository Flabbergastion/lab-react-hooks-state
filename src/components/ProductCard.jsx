// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const { name, category, price } = product;

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;