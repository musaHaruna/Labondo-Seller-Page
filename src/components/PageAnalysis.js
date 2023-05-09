import React from 'react';
import { FaLevelUpAlt } from 'react-icons/fa';
import Chart from 'react-apexcharts';
import { useState } from 'react';
import {
  productChart,
  reviewChart,
  analysisChart,
  statistics,
} from './ChartsData';

const PageAnalysis = () => {
  const [product, setProduct] = useState(productChart);
  const [review, setReview] = useState(reviewChart);
  const [analysis, setAnaylysis] = useState(analysisChart);
  const [stats, setStats] = useState(statistics);

  return (
    <article className='container'>
      <section className='sales '>
        <div className='analysis'>
          <div className='sales-padding'>
            <h5>Number of available</h5>
            <h2>#30,000</h2>
          </div>
          <div className='chart'>
            <span>
              <FaLevelUpAlt /> 12%from last week
            </span>
            <div className='chartea'>
              <Chart
                options={review.options}
                series={review.series}
                type='area'
                width='200'
              />
            </div>
          </div>
        </div>

        <div className='analysis'>
          <div className='sales-padding'>
            <h5>Number of available</h5>
            <h2>#30,000</h2>
          </div>
          <div className='chart'>
            <span>
              <FaLevelUpAlt /> 12%from last week
            </span>
            <div className='chartea'>
              <Chart
                options={review.options}
                series={review.series}
                type='area'
                width='200'
              />
            </div>
          </div>
        </div>

        <div className='analysis'>
          <div className='sales-padding'>
            <h5>Number of available</h5>
            <h2>#30,000</h2>
          </div>
          <div className='chart'>
            <span>
              <FaLevelUpAlt /> 12%from last week
            </span>
            <div className='chartea'>
              <Chart
                options={review.options}
                series={review.series}
                type='area'
                width='200'
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Chart
          options={stats.options}
          series={stats.series}
          type='area'
          width='1200'
        />
      </section>
    </article>
  );
};

export default PageAnalysis;
