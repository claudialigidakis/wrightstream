// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class PurchasePhoto extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

  render () {
    return (
      <div>
        {
          (() => {
            if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
              return (
                <div
                  className="empty-photo"
                  onClick={() => {
                    if (this.props.user.role_id !== 3) {
                      this.props.assign();
                    } else {
                      this.props.assignStaff(this.props.user.id);
                      this.props.changeStatus(2, true);
                    }
                  }}
                ></div>
              );
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
                    if (this.props.user.role_id !== 3 || this.props.purchase.staff_id === this.props.user.id) {
                      this.props.assignStaff();
                      this.props.changeStatus(2, false);
                    }
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
                      if (this.props.user.role_id !== 3 || this.props.purchase.staff_id === this.props.user.id) {
                        this.props.assignStaff();
                      }
                    }}
                  />
                );
              } else {
                return (
                  <div
                    className="empty-photo"
                    onClick={() => {
                      if (this.props.user.role_id !== 3) {
                        this.props.assign();
                      } else {
                        this.props.assignStaff(this.props.user.id);
                      }
                    }}
                  ></div>
                );
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
  user: state.auth.user
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PurchasePhoto);
