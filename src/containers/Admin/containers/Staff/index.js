// REACT
import React from 'react';

// COMPONENTS
import CurrentStaff from './components/CurrentStaff';
import TotalStaff from './components/TotalStaff';
import StaffCompleted from './components/StaffCompleted';

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
