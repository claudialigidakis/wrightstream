// REACT
import React from 'react';

// COMPONENTS
import MostUsedData from './components/MostUsedData';
import MostOrderedData from './components/MostOrderedData';

// ==========

class Supplies extends React.Component {
  render () {
    return (
      <div>
        <MostOrderedData />
        <br />
        <MostUsedData />
      </div>
    );
  };
};

export default Supplies;
