import React from 'react';
import products from '../data/Products';
import ProductList from '../components/ProductList';

const Phones = () => {
  return (
    <div className="container mt-4">
      <h2>Phones</h2>
      <ProductList products={products.phones} />
    </div>
  );
};

export default Phones;
