// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class Purchase extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal'
    };
    this.toggle = this.toggle.bind(this);
  };

  toggle () {
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

  render () {
    console.log(this.props.categories)
    return (
      <div>
        <div className="card">
          <header className="card-header"></header>
          <div className="card-content">
            <div className="content">
              <div className="columns is-marginless">
                <div className="column is-2">
                  <div className="store-logo-img">
                    <img src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png" alt="Shopify" />
                  </div>
                </div>
                <div className="column is-6">
                  <div className="purchase-progress">
                    <a onClick={this.toggle}>Purchase #6</a>
                    <progress className="progress is-small" value="100" max="100" />
                  </div>
                </div>
                <div className="column is-2 purchase-profile">
                  {/* <div className="empty-photo"></div> */}
                  {/* <img src={this.props.user.photo} alt='' /> */}
                </div>
                <div className="column is-2 purchase-drag">
                  <span className="lnr-calendar-check"></span>
                </div>
              </div>
            </div>
          </div>
          {/* <footer className="card-footer">
            Move to Pending
          </footer> */}
        </div>

        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content modal-purchase">
            <div className="columns is-marginless">
              <div className="column is-5 modal-sidebar">
                <div className="purchase-status">
                  Delivery
                </div>
                <div className="purchase-header level">
                  <div className="level-left">
                    <div className="level-item">
                      <div className="store-logo-img">
                        <img src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png" alt="Shopify" />
                      </div>
                    </div>
                    <div className="level-item">
                      <h1 className="title is-5 is-marginless">Purchase #6</h1>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <div className="purchase-profile">
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
                      <progress className="progress is-small is-primary" value="100" max="100" />
                    </div>
                  </div>
                </div>

                <div className="purchase-row-child">
                  <ul>
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
                            <span className="lnr-check"></span> 1 oz Flour
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
                      <progress className="progress is-small is-primary" value="100" max="100" />
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
                              <input className="is-checkradio" id="cupcakes" type="checkbox" name="cupcakes" checked />
                              <label htmlFor="cupcakes">12 Glazed Donuts</label>
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
                              <input className="is-checkradio" id="ready" type="radio" name="quality" checked />
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
                  <div className="level-right">
                    <div className="level-item">
                      <div className="purchase-profile">
                        <img src={this.props.user.photo} alt='' />
                      </div>
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
                { this.props.item ? (
                  <div>
                          <p className="image is-2by1">
                            <img src={this.props.item.photo} alt={this.props.item.name} />
                          </p>
                          <div className="modal-container">
                            <div>
                              <h1 className="title is-3">{this.props.item.name}</h1>
                              <small>
                                Item
                                {
                                  this.props.categories.find(category => category.id === this.props.item.category_id) ?
                                  (
                                    <span>
                                      <span className="product-bullet"> &bull; </span>
                                      {this.props.categories.find(category => category.id === this.props.item.category_id).name}
                                    </span>
                                  ) : null
                                }
                              </small>
                            </div>
                            <div>
                              <h2 className="subtitle is-5">{this.props.item.product === 'item' ? 'Supplies' : 'Items'}</h2>
                              <ul>
                                {
                                  this.props.item.supplies.map((supply, i) => {
                                    return (
                                      <li key={i}>
                                        <span className="supply-qty">{supply.stock_qty}</span>
                                        <span className="supply-unit">{supply.stock_qty_measure}</span>
                                        {supply.name}
                                      </li>
                                    );
                                  })
                                }
                              </ul>
                            </div>
                            <div>
                              <h2 className="subtitle is-5">Steps</h2>
                              <ol>
                                {
                                  Object.values(JSON.parse(this.props.item.steps)).map((step, i) => {
                                    return (
                                      <li key={i}>
                                        {step}
                                      </li>
                                    );
                                  })
                                }
                              </ol>
                            </div>
                          </div>
                        </div>

                        ) : null

                      }

              </div>
            </div>



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

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Purchase);
