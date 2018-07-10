// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStaff } from '../../actions/workstream';

// ==========

class PurchasePhoto extends React.Component {
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
      <div>
        {
          (() => {
            if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
              return <div className="empty-photo" onClick={this.props.assign}></div>;
            } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
              return (
                <img
                  src={
                    this.props.staff.find(staff => staff.id === this.props.purchase.staff_id) ?
                    this.props.staff.find(staff => staff.id === this.props.purchase.staff_id).photo
                    : null
                  }
                  alt={
                    this.props.staff.find(staff => staff.id === this.props.purchase.staff_id) ?
                    `${this.props.staff.find(staff => staff.id === this.props.purchase.staff_id).first_name[0]}${this.props.staff.find(staff => staff.id === this.props.purchase.staff_id).last_name[0]}`
                    : ''
                  }
                  onClick={() => {
                    this.props.assignStaff();
                    this.props.changeStatus(2, false);
                  }}
                />
              );
            } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
              if (this.props.staff.find(staff => staff.id === this.props.purchase.staff_id)) {
                return (
                  <img
                    src={
                      this.props.staff.find(staff => staff.id === this.props.purchase.staff_id).photo
                    }
                    alt={
                      `${this.props.staff.find(staff => staff.id === this.props.purchase.staff_id).first_name[0]}${this.props.staff.find(staff => staff.id === this.props.purchase.staff_id).last_name[0]}`
                    }
                    onClick={() => {
                      this.props.assignStaff();
                    }}
                  />
                );
              } else {
                return <div className="empty-photo" onClick={this.props.assign}></div>;
              }
            } else {
              return null;
            }
          })()
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(PurchasePhoto);
