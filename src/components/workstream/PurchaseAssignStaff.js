// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class PurchaseAssignStaff extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

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

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, mapDispatchToProps)(PurchaseAssignStaff);
