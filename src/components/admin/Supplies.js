// REACT
import React from 'react';

// COMPONENTS
import MostUsedData from './MostUsedData'
import MostOrderedData from './MostOrderedData'

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
