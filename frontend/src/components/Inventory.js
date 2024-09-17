import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Inventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/inventory').then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
