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
    console.log(this.props.staff);
    return (
      <div className="modal-content purchase-assign">
        <ul>
          {
            this.props.staff.map(staff => {
              return (
                <PurchaseAssignStaff staff={staff} />
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
