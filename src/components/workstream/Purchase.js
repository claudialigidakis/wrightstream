// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeStatus } from '../../actions/workstream';

// COMPONENTS
import PurchaseModal from './PurchaseModal';

// HELPERS
const moment = require('moment');

// ==========

class Purchase extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal'
    };
  };

  toggle = () => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active'
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal'
      });
    }
  };

  changeStatus = (status, completed) => {
    this.props.changeStatus(this.props.purchase.id, status, completed);
  };

  render () {
    return (
      <div>
        <div className="card">
          <header
            className={
              (() => {
                if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
                  if ((this.props.purchase.supplies.filter(supply => supply.completed).length / this.props.purchase.supplies.length) * 100 === 0) {
                    return 'card-header status-red';
                  } else if ((this.props.purchase.supplies.filter(supply => supply.completed).length / this.props.purchase.supplies.length) * 100 === 100) {
                    return 'card-header status-green';
                  } else {
                    return 'card-header status-yellow';
                  }
                } else if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
                  return 'card-header';
                } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
                  return 'card-header';
                } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
                  if (this.props.purchase.quality_check || (this.props.purchase.pick_up || this.props.purchase.pick_up === false)) {
                    return 'card-header status-yellow';
                  } else {
                    return 'card-header status-red';
                  }
                } else if (this.props.purchase.statuses.find(status => status.status_id === 4).completed === true) {
                  return 'card-header';
                }
              })()
            }
          ></header>
          <div className="card-content">
            <div className="content">
              <div className="columns is-marginless">
                <div className="column is-2">
                  <div className="store-logo">
                    C
                  </div>
                </div>
                <div className="column is-6">
                  <div className="purchase-progress">
                    <a onClick={this.toggle}>Purchase #{this.props.purchase.id}</a>
                    <progress
                      className="progress is-small"
                      value={
                        (() => {
                          if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
                            return (this.props.purchase.supplies.filter(supply => supply.completed).length / this.props.purchase.supplies.length) * 100;
                          } else if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
                            return ((this.props.purchase.items.filter(item => item.completed).length + this.props.purchase.bundles.filter(bundle => bundle.completed).length) / (this.props.purchase.items.length + this.props.purchase.bundles.length)) * 100;
                          } else {
                            return 100;
                          }
                        })()
                      }
                      max="100"
                    />
                  </div>
                </div>
                <div className="column is-2 purchase-profile">
                  {
                    (() => {
                      if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
                        return <div className="empty-photo" onClick={() => this.changeStatus(2, true)}></div>;
                      } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
                        return <img src={this.props.user.photo} alt='' onClick={() => this.changeStatus(2, false)} />;
                      } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
                        return <div className="empty-photo"></div>;
                      } else {
                        return null;
                      }
                    })()
                  }
                </div>
                <div className="column is-2 purchase-drag">
                  {
                    (() => {
                      if (this.props.purchase.statuses.find(status => status.status_id === 4).completed === true) {
                        const today = new Date();
                        if (moment(this.props.purchase.delivery_date).isBefore(today)) {
                          return <span className="lnr-calendar-check"></span>;
                        } else {
                          return <span className="lnr-calendar-empty"></span>;
                        }
                      } else {
                        return <span className="lnr-line-spacing"></span>;
                      }
                    })()
                  }
                </div>
              </div>
            </div>
          </div>
          {
            (() => {
              if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
                if ((this.props.purchase.supplies.filter(supply => supply.completed).length / this.props.purchase.supplies.length) * 100 === 100) {
                  return (
                    <footer className="card-footer" onClick={() => this.changeStatus(1, true)}>
                      Move to Pending
                    </footer>
                  );
                }
              } else {
                return null;
              }
            })()
          }
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content modal-purchase">
            <PurchaseModal purchase={this.props.purchase} changeStatus={this.changeStatus} />
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.toggle}></button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeStatus
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Purchase);
