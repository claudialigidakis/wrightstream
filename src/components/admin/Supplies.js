// REACT
import React from 'react';

// COMPONENTS
import MostUsedData from './MostUsedData'
import MostOrderedData from './MostOrderedData'
// import MostUsedSupplies from './MostUsedSupplies'
// import MostOrderedSupplies from './MostOrderedSupplies'

// ==========

class Supplies extends React.Component {

  render() {
    return (
    <div>
      <MostOrderedData />
      <br />
      <MostUsedData />
    </div>);
  };
};

export default Supplies;
