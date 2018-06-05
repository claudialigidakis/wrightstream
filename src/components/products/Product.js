// REACT
import React from 'react';

// REDUX
import { connect } from 'react-redux';

// ==========

class Product extends React.Component {
  render () {
    return (
      <div className="column is-4">
        <div className="card">
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
      </div>
    );
  };
};

const mapStateToProps = state => ({
  categories: state.products.categories
});

export default connect(mapStateToProps, null)(Product);
