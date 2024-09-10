import React from 'react';

const CategoryTile = ({ category }) => {
  return (
    <div className="category-tile">
      <h3>{category.name}</h3>
      <img src={category.image} alt={category.name} />
    </div>
  );
};

export default CategoryTile;
