// REACT
import React from 'react';

// COMPONENTS
import TotalProductsSold from './TotalProductsSold';
import TotalItemsSold from './TotalItemsSold';
import TotalBundlesSold from './TotalBundlesSold';
import TotalItemsSoldChart from './TotalItemsSoldChart';
import TotalBundlesSoldChart from './TotalBundlesSoldChart';

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
