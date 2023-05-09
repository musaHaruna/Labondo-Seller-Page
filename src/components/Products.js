import React from 'react';
import Product from './Product';
import { products } from '../data';
import { FaSearch } from 'react-icons/fa';

const Products = () => {
  return (
    <article>
      <section className='container products'>
        <div className='available-products'>
          <h2>Available products</h2>
          <div className='search-input-container'>
            <FaSearch className='search-icon' />
            <input
              type='text'
              id='searchInput'
              name='searchInput'
              placeholder='Search for something'
            />
          </div>
        </div>
        <div className='product-grid'>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Products;
