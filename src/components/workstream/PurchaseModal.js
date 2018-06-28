// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import PurchaseSupply from './PurchaseSupply';
import PurchaseItem from './PurchaseItem';

// ==========

class PurchaseModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
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
                <progress className="progress is-small" value="60" max="100" />
              </div>
            </div>
          </div>

          <div className="purchase-row-child">
            <ul>
              <PurchaseSupply />
              <li>
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <span className="lnr-check"></span> 3 oz Milk
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <span className="lnr-check"></span> 1 oz Frosting
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <span className="lnr-cross2"></span> 1 oz Flour
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="purchase-row level">
            <div className="level-left">
              <div className="level-item">
                <h2 className="title is-5 is-marginless">Products</h2>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <progress className="progress is-small" value="20" max="100" />
              </div>
            </div>
          </div>

          <div className="purchase-row-child">
            <ul>
              <PurchaseItem />
              <li>
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <div className="field">
                        <input className="is-checkradio" id="cupcakes" type="checkbox" name="cupcakes" />
                        <label htmlFor="cupcakes">5 Chocolate Cupcakes</label>
                      </div>
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
              </li>
              <li>
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <div className="field">
                        <input className="is-checkradio" id="cookies" type="checkbox" name="cookies" />
                        <label htmlFor="cookies">21 Cinnamon Cookies</label>
                      </div>
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
              </li>
              <li>
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <div className="field">
                        <input className="is-checkradio" id="donuts3" type="checkbox" name="donuts" />
                        <label htmlFor="donuts3">12 Donuts</label>
                      </div>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <div className="purchase-profile">
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
                <h2 className="title is-5 is-marginless">Delivery</h2>
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
        <div className="column is-7">
          blahblahblah
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
