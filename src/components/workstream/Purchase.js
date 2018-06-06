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
                <img src={this.props.user.photo} />
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

        {/* <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content">
            <p className="image is-2by1">
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
            </div>
            <div className="product-control">
              <div><a href=""><span className="lnr-heart"></span></a></div>
              <div><a href=""><span className="lnr-pencil"></span></a></div>
              <div><a href=""><span className="lnr-trash2"></span></a></div>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.toggle}></button>
        </div>  */}


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
