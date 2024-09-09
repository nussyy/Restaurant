import React, { useState, useEffect } from "react";
import axios from "axios";

const MenuItems = ({ categoryId }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get(`/api/menu/categories/${categoryId}/items`)
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the menu items!", error);
      });
  }, [categoryId]);

  return (
    <div className="menu-items">
      {menuItems.map((item) => (
        <div key={item.menuItemId} className="menu-item">
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <p>{item.available ? "Available" : "Unavailable"}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
