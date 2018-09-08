// REACT
import React from 'react';

// ==========

class PurchaseAssignStaff extends React.Component {
  render () {
    return (
      <li
        onClick={() => {
          this.props.assignStaff(this.props.staff.id);
          this.props.assign();
          this.props.changeStatus(2, true);
        }}
      >
        <img src={this.props.staff.photo} alt={`${this.props.staff.first_name} ${this.props.staff.last_name}`} />
        {this.props.staff.first_name} {this.props.staff.last_name}
      </li>
    );
  };
};

export default PurchaseAssignStaff;
