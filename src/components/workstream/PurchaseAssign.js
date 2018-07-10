// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import PurchaseAssignStaff from './PurchaseAssignStaff';

// ==========

class PurchaseAssign extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

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
              )
            })
          }
        </ul>
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseAssign);
