import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Product from './Product.js'
import products from './vschoolProducts.js'

function App() {
  const productComponents = products.map((product) => {
    return (
      <Product
        key = {product.id}
        name = {product.name}
        price = {product.price}
        description = {product.description}
      />
    )
  })
    return (
      <div>
        {productComponents}
      </div>
    );
}

export default App;
