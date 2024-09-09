import React from 'react';
import './CategoryTile.css'; // Import CSS for tile styling

const CategoryTile = ({ category }) => {
  return (
    <div className="category-tile">
      <img 
        src={`https://via.placeholder.com/150?text=${category.categoryName}`} 
        alt={category.categoryName} 
        className="category-image"
      />
      <h3>{category.categoryName}</h3>
    </div>
  );
};

export default CategoryTile;
