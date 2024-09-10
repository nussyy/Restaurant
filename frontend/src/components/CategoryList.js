import React from 'react';
import CategoryTile from './CategoryTile';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <CategoryTile key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
