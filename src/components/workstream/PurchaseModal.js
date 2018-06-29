// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import PurchaseSupply from './PurchaseSupply';
import PurchaseItem from './PurchaseItem';
import PurchaseBundle from './PurchaseBundle';
import PurchaseProductDetails from './PurchaseProductDetails';

// ==========

class PurchaseModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      product: null,
      bundle: false,
      suppliesCollapse: false,
      suppliesClasses: 'purchase-row-child',
      suppliesArrow: 'fas fa-chevron-down',
      productsCollapse: false,
      productsClasses: 'purchase-row-child',
      productsArrow: 'fas fa-chevron-down',
      qualityCollapse: false,
      qualityClasses: 'purchase-row-child',
      qualityArrow: 'fas fa-chevron-down',
      scheduleCollapse: false,
      scheduleClasses: 'purchase-row-child',
      scheduleArrow: 'fas fa-chevron-down',
      notesCollapse: false,
      notesClasses: 'purchase-row-child',
      notesArrow: 'fas fa-chevron-down'
    };
  };

  toggle = (product, bundle) => {
    this.setState({
      product: product,
      bundle: bundle
    });
  };

  collapseSupplies = () => {
    if (!this.state.suppliesCollapse) {
      this.setState({
        suppliesCollapse: true,
        suppliesClasses: this.state.suppliesClasses + ' is-hidden',
        suppliesArrow: 'fas fa-chevron-up'
      });
    } else {
      this.setState({
        suppliesCollapse: false,
        suppliesClasses: 'purchase-row-child',
        suppliesArrow: 'fas fa-chevron-down'
      });
    }
  };

  collapseProducts = () => {
    if (!this.state.productsCollapse) {
      this.setState({
        productsCollapse: true,
        productsClasses: this.state.productsClasses + ' is-hidden',
        productsArrow: 'fas fa-chevron-up'
      });
    } else {
      this.setState({
        productsCollapse: false,
        productsClasses: 'purchase-row-child',
        productsArrow: 'fas fa-chevron-down'
      });
    }
  };

  collapseQuality = () => {
    if (!this.state.qualityCollapse) {
      this.setState({
        qualityCollapse: true,
        qualityClasses: this.state.qualityClasses + ' is-hidden',
        qualityArrow: 'fas fa-chevron-up'
      });
    } else {
      this.setState({
        qualityCollapse: false,
        qualityClasses: 'purchase-row-child',
        qualityArrow: 'fas fa-chevron-down'
      });
    }
  };

  collapseSchedule = () => {
    if (!this.state.scheduleCollapse) {
      this.setState({
        scheduleCollapse: true,
        scheduleClasses: this.state.scheduleClasses + ' is-hidden',
        scheduleArrow: 'fas fa-chevron-up'
      });
    } else {
      this.setState({
        scheduleCollapse: false,
        scheduleClasses: 'purchase-row-child',
        scheduleArrow: 'fas fa-chevron-down'
      });
    }
  };

  collapseNotes = () => {
    if (!this.state.notesCollapse) {
      this.setState({
        notesCollapse: true,
        notesClasses: this.state.notesClasses + ' is-hidden',
        notesArrow: 'fas fa-chevron-up'
      });
    } else {
      this.setState({
        notesCollapse: false,
        notesClasses: 'purchase-row-child',
        notesArrow: 'fas fa-chevron-down'
      });
    }
  };

  render () {
    return (
      <div className="columns is-marginless">
        <div className="column is-5 modal-sidebar">
          <div
            className={
              (() => {
                if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
                  if ((this.props.purchase.supplies.filter(supply => supply.completed).length / this.props.purchase.supplies.length) * 100 === 0) {
                    return 'purchase-status status-red';
                  } else if ((this.props.purchase.supplies.filter(supply => supply.completed).length / this.props.purchase.supplies.length) * 100 === 100) {
                    return 'purchase-status status-green';
                  } else {
                    return 'purchase-status status-yellow';
                  }
                } else if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
                  return 'purchase-status';
                } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
                  return 'purchase-status';
                } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
                  return 'purchase-status status-red';
                } else if (this.props.purchase.statuses.find(status => status.status_id === 4).completed === true) {
                  return 'purchase-status';
                }
              })()
            }
          >
            {
              (() => {
                if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
                  return 'Backlog';
                } else if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
                  return 'Pending';
                } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
                  return 'Crafting';
                } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
                  return 'Finalize';
                } else if (this.props.purchase.statuses.find(status => status.status_id === 4).completed === true) {
                  return 'Delivery';
                }
              })()
            }
          </div>
          <div className="purchase-header level">
            <div className="level-left">
              <div className="level-item">
                <div className="store-logo">
                  C
                </div>
              </div>
              <div className="level-item">
                <h1 className="title is-5 is-marginless">Purchase #{this.props.purchase.id}</h1>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <div className="purchase-profile">
                  {
                    (() => {
                      if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
                        return <div className="empty-photo" onClick={() => this.props.changeStatus(2, true)}></div>;
                      } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
                        return <img src={this.props.user.photo} alt='' onClick={() => this.props.changeStatus(2, false)} />;
                      } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
                        return <div className="empty-photo"></div>;
                      } else {
                        return null;
                      }
                    })()
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="purchase-row level" onClick={this.collapseSupplies}>
            <div className="level-left">
              <div className="level-item">
                <h2 className="title is-5 is-marginless">Supplies</h2>
                <i className={this.state.suppliesArrow}></i>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <progress
                  className="progress is-small"
                  value={(this.props.purchase.supplies.filter(supply => supply.completed).length / this.props.purchase.supplies.length) * 100}
                  max="100" />
              </div>
            </div>
          </div>

          <div className={this.state.suppliesClasses}>
            <ul>
              {
                this.props.purchase.supplies.map(supply => {
                  return <PurchaseSupply key={supply.supplies_id} supply={supply} />;
                })
              }
            </ul>
          </div>

          <div className="purchase-row level" onClick={this.collapseProducts}>
            <div className="level-left">
              <div className="level-item">
                <h2 className="title is-5 is-marginless" onClick={this.toggle}>Products</h2>
                <i className={this.state.productsArrow}></i>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <progress
                  className="progress is-small"
                  value={
                    ((this.props.purchase.items.filter(item => item.completed).length + this.props.purchase.bundles.filter(bundle => bundle.completed).length) / (this.props.purchase.items.length + this.props.purchase.bundles.length)) * 100
                  }
                  max="100" />
              </div>
            </div>
          </div>

          <div className={this.state.productsClasses}>
            <div
              className={
                (() => {
                  if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
                    return 'disable';
                  } else if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
                    return 'disable';
                  } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
                    return null;
                  } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
                    return 'disable';
                  } else if (this.props.purchase.statuses.find(status => status.status_id === 4).completed === true) {
                    return 'disable';
                  }
                })()
              }
            >
              <ul>
                {
                  this.props.purchase.bundles.map(bundle => {
                    return <PurchaseBundle key={bundle.id} bundle={bundle} purchase={this.props.purchase} toggle={this.toggle} />;
                  })
                }
                {
                  this.props.purchase.items.map(item => {
                    return <PurchaseItem key={item.id} item={item} purchase={this.props.purchase} toggle={this.toggle} />;
                  })
                }
              </ul>
              <div className="has-text-centered" style={{padding:'1rem'}}>
                <button
                  className="button is-small is-primary"
                  disabled={
                    (() => {
                      if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true) {
                        return true;
                      } else {
                        if (((this.props.purchase.items.filter(item => item.completed).length + this.props.purchase.bundles.filter(bundle => bundle.completed).length) / (this.props.purchase.items.length + this.props.purchase.bundles.length)) * 100 === 100) {
                          return false;
                        } else {
                          return true;
                        }
                      }
                    })()
                  }
                  onClick={() => this.props.changeStatus(3, true)}
                >Complete Products</button>
              </div>
            </div>
          </div>

          <div className="purchase-row level" onClick={this.collapseQuality}>
            <div className="level-left">
              <div className="level-item">
                <h2 className="title is-5 is-marginless">Quality Check</h2>
                <i className={this.state.qualityArrow}></i>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <div className="purchase-profile">
                  <img src={this.props.user.photo} alt='' />
                </div>
              </div>
            </div>
          </div>

          <div className={this.state.qualityClasses}>
            <ul>
              <li>
                <div className="field">
                  <input className="is-checkradio" id="ready" type="radio" name="quality" />
                  <label htmlFor="ready">Ready for delivery</label>
                </div>
              </li>
              <li>
                <div className="field">
                  <input className="is-checkradio" id="sendback" type="radio" name="quality" />
                  <label htmlFor="sendback">Send back to crafting</label>
                </div>
              </li>
            </ul>
          </div>

          <div className="purchase-row level" onClick={this.collapseSchedule}>
            <div className="level-left">
              <div className="level-item">
                <h2 className="title is-5 is-marginless">Schedule</h2>
                <i className={this.state.scheduleArrow}></i>
              </div>
            </div>
          </div>

          <div className={this.state.scheduleClasses}>
            <ul>
              <li>
                <div className="field">
                  <input className="is-checkradio" id="ready" type="radio" name="quality" />
                  <label htmlFor="ready">Pick Up</label>
                </div>
              </li>
              <li>
                <div className="field">
                  <input className="is-checkradio" id="sendback" type="radio" name="quality" />
                  <label htmlFor="sendback">Ship</label>
                </div>
              </li>
              <li>
                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="Delivery Service"
                    id="service"
                    value={this.state.service}
                  />
                </div>
              </li>
              <li>
                <div className="field">
                  <input
                    className="input"
                    type="date"
                    placeholder="Shipping Date"
                    id="date"
                    value={this.state.date}
                  />
                </div>
              </li>
              <li>
                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="Tracking Number"
                    id="tracking-number"
                    value={this.state.tracking}
                  />
                </div>
              </li>
            </ul>
          </div>

          <div className="purchase-row level" onClick={this.collapseNotes}>
            <div className="level-left">
              <div className="level-item">
                <h2 className="title is-5 is-marginless">Notes</h2>
                <i className={this.state.notesArrow}></i>
              </div>
            </div>
          </div>

          <div className={this.state.notesClasses}>
            <ul>
              <li>
                <div className="field">
                  <textarea
                    className="textarea"
                    placeholder="Write your comments here..."
                    id="notes"
                    value={this.state.notes}
                  />
                </div>
              </li>
            </ul>
          </div>

        </div>
        <div className="column is-7">
          {
            this.state.product ? <PurchaseProductDetails bundle={this.state.bundle} product={this.state.product} /> : null
          }
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseModal);
