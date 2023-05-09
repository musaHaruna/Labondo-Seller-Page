import React from 'react';

const Product = ({ img, detail, status, price }) => {
  return (
    <div className='product'>
      <img src={img} alt='' />
      <div>
        <p>{detail}</p>
        <p>{price}</p>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default Product;
