import React from 'react';
import { FaEllipsisV, FaStar } from 'react-icons/fa';

const Reviews = ({ name, product, price, review, img, date }) => {
  return (
    <section className='review'>
      <div className='review-user'>
        <figure>
          <img src={img} alt='' />
        </figure>
        <div>
          <h3>{name}</h3>
          <p>product: {product}</p>
          <p>price: {price}</p>
        </div>
      </div>
      <div>
        <div>
          <div className='stars'>
            <div>
              <FaStar color='#fc5a00' />
              <FaStar color='#fc5a00' />
              <FaStar color='#fc5a00' />
              <FaStar color='#fc5a00' />
              <FaStar color='#fc5a00' />
            </div>
            <p>{date}</p>
          </div>

          <p>{review}</p>
        </div>
      </div>
      <FaEllipsisV className='elipse' />
    </section>
  );
};

export default Reviews;
