// REACT
import React from 'react';

// REDUX
import { connect } from 'react-redux';

// ==========

class Product extends React.Component {
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
      <div className="column is-4">
        <div className="card" onClick={this.toggle}>
          <div className="card-image">
            <figure className="image is-16by9">
              <img src={this.props.photo} alt={this.props.name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              {this.props.name}
            </div>
          </div>
          <footer className="card-footer">
            <a className="card-footer-item card-footer-category disable">
              {
                this.props.categories.find(category => category.id === this.props.category_id) ?
                (
                  this.props.categories.find(category => category.id === this.props.category_id).name
                ) : null
              }
            </a>
            <a className="card-footer-item"><span className="lnr-heart"></span></a>
            <a className="card-footer-item"><span className="lnr-pencil"></span></a>
            <a className="card-footer-item"><span className="lnr-trash2"></span></a>
          </footer>
        </div>






        <div className={this.state.modalClasses}>
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
              <div><a><span className="lnr-heart"></span></a></div>
              <div><a><span className="lnr-pencil"></span></a></div>
              <div><a><span className="lnr-trash2"></span></a></div>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.toggle}></button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  categories: state.products.categories
});

export default connect(mapStateToProps, null)(Product);
