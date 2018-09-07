// REACT
import React from 'react';

// COMPONENTS
import CurrentStaff from './CurrentStaff';
import NewPurchases from './NewPurchases';
import CompletedPurchases from './CompletedPurchases';
import CurrentPurchasesStatus from './CurrentPurchasesStatus';
import StaffActivity from './StaffActivity';

// ==========

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <div className="columns">
          <CurrentStaff />
          <NewPurchases />
          <CompletedPurchases />
        </div>
        <br />
        <div className="columns">
          <StaffActivity />
          <CurrentPurchasesStatus />
        </div>
      </div>
    );
  };
};

export default Dashboard;
