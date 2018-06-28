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
      modal: false,
      modalClasses: 'column is-7'
    };
  };

  toggle = (product, bundle) => {
    this.setState({
      product: product,
      bundle: bundle,
      modal: true,
      modalClasses: this.state.modalClasses + ' is-active'
    });
  };

  render () {
    console.log(this.props);
    return (
      <div className="columns is-marginless">
        <div className="column is-5 modal-sidebar">
          <div className="purchase-status">
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
                  <div className="empty-photo"></div>
                  {/* <img src={this.props.user.photo} alt='' /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="purchase-row level">
            <div className="level-left">
              <div className="level-item">
                <h2 className="title is-5 is-marginless">Supplies</h2>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <progress
                  className="progress is-small"
                  value={
                    this.props.purchase.supplies.filter(supply => supply.completed).length / this.props.purchase.supplies.length
                  }
                  max="100" />
              </div>
            </div>
          </div>

          <div className="purchase-row-child">
            <ul>
              {
                this.props.purchase.supplies.map(supply => {
                  return <PurchaseSupply key={supply.supplies_id} supply={supply} />;
                })
              }
            </ul>
          </div>

          <div className="purchase-row level">
            <div className="level-left">
              <div className="level-item">
                <h2 className="title is-5 is-marginless" onClick={this.toggle}>Products</h2>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <progress
                  className="progress is-small"
                  value={
                    this.props.purchase.items.filter(item => item.completed).length / this.props.purchase.items.length
                  }
                  max="100" />
              </div>
            </div>
          </div>

          <div className="purchase-row-child">
            <ul>
              {
                this.props.purchase.bundles.map(bundle => {
                  return <PurchaseBundle key={bundle.id} bundle={bundle} toggle={this.toggle} />;
                })
              }
              {
                this.props.purchase.items.map(item => {
                  return <PurchaseItem key={item.id} item={item} toggle={this.toggle} />;
                })
              }
            </ul>
          </div>

          <div className="purchase-row level">
            <div className="level-left">
              <div className="level-item">
                <h2 className="title is-5 is-marginless">Quality Check</h2>
                <i className="fas fa-chevron-down"></i>
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

          <div className="purchase-row-child">
            <ul>
              <li>
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <div className="field">
                        <input className="is-checkradio" id="ready" type="radio" name="quality" />
                        <label htmlFor="ready">Ready for delivery</label>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <div className="field">
                        <input className="is-checkradio" id="sendback" type="radio" name="quality" />
                        <label htmlFor="sendback">Send back to crafting</label>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="purchase-row level">
            <div className="level-left">
              <div className="level-item">
                <h2 className="title is-5 is-marginless">Schedule</h2>
                <i className="fas fa-chevron-up"></i>
              </div>
            </div>
          </div>

          <div className="purchase-row level">
            <div className="level-left">
              <div className="level-item">
                <h2 className="title is-5 is-marginless">Notes</h2>
                <i className="fas fa-chevron-up"></i>
              </div>
            </div>
          </div>

        </div>
        <div className={this.state.modalClasses}>
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
