// REACT
import React from 'react';

// COMPONENTS
import TotalProductsSold from './components/TotalProductsSold';
import TotalItemsSold from './components/TotalItemsSold';
import TotalBundlesSold from './components/TotalBundlesSold';
import TotalItemsSoldChart from './components/TotalItemsSoldChart';
import TotalBundlesSoldChart from './components/TotalBundlesSoldChart';

// ==========

class Products extends React.Component {
  render () {
    return (
      <div>
        <div className="columns">
          <TotalItemsSold />
          <TotalBundlesSold />
          <TotalProductsSold />
        </div>
        <br />
        <div className="columns">
          <TotalItemsSoldChart />
          <TotalBundlesSoldChart />
        </div>
      </div>
    );
  };
};

export default Products;
