import React from 'react';
import Button from './Button';

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <Button label="Add to Cart" onClick={() => alert(`Added ${item.name} to cart`)} />
    </div>
  );
};

export default MenuItem;
