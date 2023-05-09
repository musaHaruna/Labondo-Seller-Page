import React from 'react';
import Products from './Products';
import PageAnalysis from './PageAnalysis';
import Ratings from './Ratings';
import { useState } from 'react';
const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className='headings'>
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => handleTabClick('tab1')}
        >
          Products
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          Page Analysis
        </button>
        <button
          className={activeTab === 'tab3' ? 'active' : ''}
          onClick={() => handleTabClick('tab3')}
        >
          Ratings and reviews
        </button>
      </div>
      <div className='underline container'></div>
      {activeTab === 'tab1' && <Products />}
      {activeTab === 'tab2' && <PageAnalysis />}
      {activeTab === 'tab3' && <Ratings />}
    </>
  );
};

export default Tabs;
