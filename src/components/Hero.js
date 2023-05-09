import React from 'react';
import logo from '../../images/brand-logo.png';
import {
  FaLocationArrow,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaInfoCircle,
} from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';

const Hero = () => {
  return (
    <article>
      <div className='hero-bg'></div>
      <section className='container hero'>
        <figure>
          <img src={logo} alt={logo} />
        </figure>
        <div className='contact'>
          <h1>SP House of Fashion</h1>
          <div>
            <p>
              <FaLocationArrow className='icon' />
              <a href='#'>
                House of fashion | Boutique | Stylist | Personal Shopper
              </a>
            </p>
            <p>
              <FaEnvelope className='icon' />
              <a href='#'>
                Block N, shop 168 Jimeta Modern Market, Yola, Nigeria
              </a>
            </p>

            <p>
              <FaPhone className='icon' />
              <a href='#'>sphousseoffashion@gmail.com</a>
            </p>
            <p>
              <FaClock className='icon' />

              <a href='#'>+234 806 952 4008</a>
            </p>
            <p>
              <FaInfoCircle className='icon' />
              <a href='#'>Available monday - friday (8:00am -5:00 pm)</a>
            </p>
          </div>
        </div>
        <div className='btns'>
          <button>
            <AiOutlinePlus /> Add product
          </button>
          <button>
            <FiEdit2 /> Edit product
          </button>
        </div>
      </section>
    </article>
  );
};

export default Hero;
