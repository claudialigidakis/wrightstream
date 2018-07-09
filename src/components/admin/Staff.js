// REACT
import React from 'react';

// COMPONENTS
import CurrentStaff from './CurrentStaff';
import TotalStaff from './TotalStaff';
import StaffCompleted from './StaffCompleted';

// ==========

class Staff extends React.Component {

  render() {
    return (
      <div>
    <div className="columns align-items-center">
        <CurrentStaff/>
        <TotalStaff/>
      </div>
        <div className="row align-items-center">
        <StaffCompleted/>
    </div>
  </div>
);
  };
};

export default Staff;
