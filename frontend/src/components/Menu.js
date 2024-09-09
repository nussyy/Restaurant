






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from './CategoryTile';

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch menu categories from the API
    axios.get('/api/menu')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => console.error('Error fetching menu categories:', error));
  }, []);

  return (
    <div>
      <h1>ABC Restaurant Menu</h1>
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Menu;
