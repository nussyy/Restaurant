import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryTile from './CategoryTile';
import './CategoryList.css'; // Import CSS for styling

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  return (
    <div className="category-list">
      <h1>Menu Categories</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <CategoryTile 
            key={category.categoryId} 
            category={category} 
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
