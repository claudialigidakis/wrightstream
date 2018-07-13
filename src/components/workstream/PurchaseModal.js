// REACT
import React from 'react';

// COMPONENTS
import PurchaseStore from './PurchaseStore';
import PurchaseStatus from './PurchaseStatus';
import PurchasePhoto from './PurchasePhoto';
import PurchaseProgress from './PurchaseProgress';
import PurchaseSupplies from './PurchaseSupplies';
import PurchaseProducts from './PurchaseProducts';
import PurchaseProductDetails from './PurchaseProductDetails';
import PurchaseQuality from './PurchaseQuality';
import PurchaseSchedule from './PurchaseSchedule';
import PurchaseNotes from './PurchaseNotes';

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
      <div className="modal-content modal-purchase">
        <div className="columns is-marginless">
          <div className="column is-5 modal-sidebar">
            <PurchaseStatus purchase={this.props.purchase} text={true} />
            <div className="purchase-header level">
              <div className="level-left">
                <div className="level-item">
                  <PurchaseStore purchase={this.props.purchase} />
                </div>
                <div className="level-item">
                  <h1 className="title is-5 is-marginless">Purchase #{this.props.purchase.id}</h1>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <div className="purchase-profile">
                    <PurchasePhoto
                      purchase={this.props.purchase}
                      staff={this.props.staff}
                      user={this.props.user}
                      changeStatus={this.props.changeStatus}
                      assign={this.props.assign}
                      assignStaff={this.props.assignStaff}
                    />
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
                  <PurchaseProgress purchase={this.props.purchase} progress="supplies" />
                </div>
              </div>
            </div>
            <div className={this.state.suppliesClasses}>
              <PurchaseSupplies purchase={this.props.purchase} />
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
                  <PurchaseProgress purchase={this.props.purchase} progress="products" />
                </div>
              </div>
            </div>
            <div className={this.state.productsClasses}>
              <PurchaseProducts
                purchase={this.props.purchase}
                staff={this.props.staff}
                toggle={this.toggle}
                changeStatus={this.props.changeStatus}
                assignStaff={this.props.assignStaff}
              />
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
                    {
                      this.props.staff.find(staff => staff.id === this.props.purchase.statuses.find(status => status.status_id === 4).staff_id) ?
                      <img
                        src={
                          this.props.staff.find(staff => staff.id === this.props.purchase.statuses.find(status => status.status_id === 4).staff_id).photo
                        }
                        alt={
                          `${this.props.staff.find(staff => staff.id === this.props.purchase.statuses.find(status => status.status_id === 4).staff_id).first_name[0]}${this.props.staff.find(staff => staff.id === this.props.purchase.statuses.find(status => status.status_id === 4).staff_id).last_name[0]}`
                        }
                      /> : null
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className={this.state.qualityClasses}>
              <PurchaseQuality
                purchase={this.props.purchase}
                changeStatus={this.props.changeStatus}
                assignStaff={this.props.assignStaff}
              />
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
              <PurchaseSchedule purchase={this.props.purchase} changeStatus={this.props.changeStatus} />
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
              <PurchaseNotes purchase={this.props.purchase} />
            </div>

          </div>
          <div className="column is-7">
            {
              this.state.product ? <PurchaseProductDetails bundle={this.state.bundle} product={this.state.product} /> : null
            }
          </div>
        </div>
      </div>
    );
  };
};

export default PurchaseModal;
