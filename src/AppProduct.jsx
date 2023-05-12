import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';

export default function AppProduct() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Product />}
      <button onClick={() => setShowProducts(!showProducts)}>Toggle</button>
    </div>
  );
}
