import React from 'react';
import Reviews from './Reviews';
import { reviews } from '../data';
import { FaEllipsisV, FaStar, FaLevelUpAlt } from 'react-icons/fa';

const Ratings = () => {
  return (
    <article>
      <section className='container ratings'>
        <div className='review-stats'>
          <div className='total-review'>
            <h3>
              Total Reviews <FaStar color='#fc5a00' />
            </h3>
            <h2>
              30,000k
              <span>
                <FaLevelUpAlt /> 12%
              </span>
            </h2>
            <p>Growth in reviews on this year</p>
          </div>
          <div className='average-rating'>
            <h3>Average rating</h3>
            <h2>
              4.0
              <FaStar color='#fc5a00' />
              <FaStar color='#fc5a00' />
              <FaStar color='#fc5a00' />
              <FaStar color='#fc5a00' />
              <FaStar color='#444444' />
            </h2>
            <p>Average ratings this year</p>
          </div>
          <div className='star-ratings'>
            <div>
              <FaStar className='rating-star' color='#444444' />
              <div>
                <h4>5</h4>
                <div className='star-5'></div>
                <h4>20.k</h4>
              </div>
            </div>
            <div>
              <FaStar className='rating-star' color='#444444' />
              <div>
                <h4>4</h4>
                <div className='star-4'></div>
                <h4>1.k</h4>
              </div>
            </div>
            <div>
              <FaStar className='rating-star' color='#444444' />
              <div>
                <h4>3</h4>
                <div className='star-3'></div>
                <h4>500</h4>
              </div>
            </div>
            <div>
              <FaStar className='rating-star' color='#444444' />
              <div>
                <h4>2</h4>
                <div className='star-2'></div>
                <h4>200</h4>
              </div>
            </div>
            <div>
              <FaStar className='rating-star' color='#444444' />
              <div>
                <h4>1</h4>
                <div className='star-1'></div>
                <h4>0k</h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          {reviews.map((review) => (
            <Reviews key={review.id} {...review} />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Ratings;
