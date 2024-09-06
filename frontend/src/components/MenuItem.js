import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <li>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
    </li>
  );
};

export default MenuItem;
