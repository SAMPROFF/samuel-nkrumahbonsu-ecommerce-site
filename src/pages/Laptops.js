import React from 'react';
import products from '../data/Products';
import ProductList from '../components/ProductList';

const Laptops = () => {
  return (
    <div className="container mt-4">
      <h2>Laptops</h2>
      <ProductList products={products.laptops} />
    </div>
  );
};

export default Laptops;
