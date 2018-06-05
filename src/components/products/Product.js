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
      modalClasses: 'modal',
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
            <a href="" className="card-footer-item"><span className="lnr-heart"></span></a>
            <a href="" className="card-footer-item"><span className="lnr-pencil"></span></a>
            <a href="" className="card-footer-item"><span className="lnr-trash2"></span></a>
          </footer>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button className="delete" aria-label="close" onClick={this.toggle}></button>
            </header>
            <section className="modal-card-body">
              <img src={this.props.photo} alt={this.props.name} />
              {this.props.name}<br />
              {this.props.product === 'item' ? 'Item' : 'Bundle'} &bull; {
                this.props.categories.find(category => category.id === this.props.category_id) ?
                (
                  this.props.categories.find(category => category.id === this.props.category_id).name
                ) : null
              }
              <h2>{this.props.product === 'item' ? 'Supplies' : 'Items'}</h2>
              <ul>
                {
                  this.props.ingredients.map((ingredient, i) => {
                    return (
                      <li key={i}>
                        {ingredient.stock_qty} {ingredient.stock_qty_measure} {ingredient.name}
                      </li>
                    );
                  })
                }
              </ul>
              <h2>Steps</h2>
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
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">Save changes</button>
              <button className="button" onClick={this.toggle}>Cancel</button>
            </footer>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  categories: state.products.categories
});

export default connect(mapStateToProps, null)(Product);
