import React from 'react';
import MenuItem from './MenuItem';

const Category = ({ category }) => {
  return (
    <section>
      <h2>{category.name}</h2>
      <ul>
        {category.items.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Category;
