// REACT
import React from 'react';

// COMPONENTS
import CurrentStaff from '../Staff/components/CurrentStaff';
import NewPurchases from '../Purchases/components/NewPurchases';
import CompletedPurchases from '../Purchases/components/CompletedPurchases';
import CurrentPurchasesStatus from './components/CurrentPurchasesStatus';
import StaffActivity from './components/StaffActivity';

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
