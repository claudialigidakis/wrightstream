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
    return (
      <div>
        <div className="card">
          <header class="card-header status-green"></header>
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
                    <a onClick={this.toggle}>Purchase #132</a>
                    <progress class="progress is-small" value="100" max="100" />
                  </div>
                </div>
                <div className="column is-2 purchase-profile">
                  {/* <div className="empty-photo"></div> */}
                  <img src={this.props.user.photo} alt={`${this.props.user.firstname} ${this.props.user.lastname}`} />
                </div>
                <div className="column is-2 purchase-drag">
                  <span className="lnr-line-spacing"></span>
                </div>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            Move to Pending
          </footer>
        </div>

        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content modal-purchase">
            <div className="columns is-marginless">
              <div className="column is-5 modal-sidebar">
                <div className="purchase-status">
                  Finalize
                </div>
                <div className="purchase-header level">
                  <div className="level-left">
                    <div className="level-item">
                      <div className="store-logo">
                        C
                      </div>
                    </div>
                    <div className="level-item">
                      <h1 className="title is-5 is-marginless">Purchase #132</h1>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <div className="purchase-profile">
                        <img src={this.props.user.photo} alt={`${this.props.user.firstname} ${this.props.user.lastname}`} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="purchase-row level">
                  <div className="level-left">
                    <div className="level-item">
                      <h2 className="title is-5 is-marginless">Supplies</h2>
                      <i class="fas fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <progress class="progress is-small" value="60" max="100" />
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
                      <i class="fas fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <progress class="progress is-small" value="20" max="100" />
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
                              <label for="cupcakes">5 Chocolate Cupcakes</label>
                            </div>
                          </div>
                        </div>
                        <div className="level-right">
                          <div className="level-item">
                            <div className="purchase-profile">
                              <img src={this.props.user.photo} alt={`${this.props.user.firstname} ${this.props.user.lastname}`} />
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
                              <input className="is-checkradio" id="cookies" type="checkbox" name="cookies" checked />
                              <label for="cookies">21 Cinnamon Cookies</label>
                            </div>
                          </div>
                        </div>
                        <div className="level-right">
                          <div className="level-item">
                            <div className="purchase-profile">
                              <img src={this.props.user.photo} alt={`${this.props.user.firstname} ${this.props.user.lastname}`} />
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
                              <label for="donuts3">12 Donuts</label>
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
                      <i class="fas fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <div className="purchase-profile">
                        <img src={this.props.user.photo} alt={`${this.props.user.firstname} ${this.props.user.lastname}`} />
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
                              <label for="ready">Ready for delivery</label>
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
                              <label for="sendback">Send back to crafting</label>
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
                      <i class="fas fa-chevron-up"></i>
                    </div>
                  </div>
                </div>

                <div className="purchase-row level">
                  <div className="level-left">
                    <div className="level-item">
                      <h2 className="title is-5 is-marginless">Notes</h2>
                      <i class="fas fa-chevron-up"></i>
                    </div>
                  </div>
                </div>

              </div>
              <div className="column is-7">
                blahblahblah
              </div>
            </div>

                  {/* <p className="image is-2by1">
                    <img src={this.props.photo} alt={this.props.name} />
                  </p>
                  <div className="modal-container">
                    <div>
                      <h1 className="title is-3">{this.props.name}</h1>
                      <small>
                        {this.props.product === 'item' ? 'Item' : 'Bundle'}
                        {
                          this.props.categories.find(category => category.id === this.props.category_id) ?
                          (
                            <span>
                              <span className="product-bullet"> &bull; </span>
                              {this.props.categories.find(category => category.id === this.props.category_id).name}
                            </span>
                          ) : null
                        }
                      </small>
                    </div>
                    <div>
                      <h2 className="subtitle is-5">{this.props.product === 'item' ? 'Supplies' : 'Items'}</h2>
                      <ul>
                        {
                          this.props.ingredients.map((ingredient, i) => {
                            return (
                              <li key={i}>
                                <span className="supply-qty">{ingredient.stock_qty}</span>
                                <span className="supply-unit">{ingredient.stock_qty_measure}</span>
                                {ingredient.name}
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
                          Object.values(JSON.parse(this.props.steps)).map((step, i) => {
                            return (
                              <li key={i}>
                                {step}
                              </li>
                            );
                          })
                        }
                      </ol>
                    </div>
                  </div> */}

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
