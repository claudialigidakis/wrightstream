// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStaff } from '../../actions/workstream';

// COMPONENTS
import PurchaseAssignStaff from './PurchaseAssignStaff';

// ==========

class PurchaseAssign extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

  componentDidMount () {
    this.props.getStaff();
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
  staff: state.workstream.staff
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getStaff
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseAssign);
