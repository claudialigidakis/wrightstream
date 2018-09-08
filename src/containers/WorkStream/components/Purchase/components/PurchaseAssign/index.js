// REACT
import React from 'react';

// COMPONENTS
import PurchaseAssignStaff from './components/PurchaseAssignStaff';

// ==========

class PurchaseAssign extends React.Component {
  render () {
    return (
      <div className="modal-content purchase-assign">
        <ul>
          {
            this.props.staff.map(staff => {
              return (
                <PurchaseAssignStaff
                  key={staff.id}
                  staff={staff}
                  assign={this.props.assign}
                  assignStaff={this.props.assignStaff}
                  changeStatus={this.props.changeStatus}
                />
              );
            })
          }
        </ul>
      </div>
    );
  };
};

export default PurchaseAssign;
