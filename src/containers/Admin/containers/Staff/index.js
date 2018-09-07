// REACT
import React from 'react';

// COMPONENTS
import CurrentStaff from './CurrentStaff';
import TotalStaff from './TotalStaff';
import StaffCompleted from './StaffCompleted';

// ==========

class Staff extends React.Component {
  render () {
    return (
      <div>
        <div className="columns">
          <CurrentStaff />
          <TotalStaff />
        </div>
        <br />
        <div className="columns">
          <StaffCompleted />
        </div>
      </div>
    );
  };
};

export default Staff;
