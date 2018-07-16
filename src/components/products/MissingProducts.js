// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import MissingProduct from './MissingProduct';
import ItemAdd from './ItemAdd';

// ==========

class MissingProducts extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal',
      modalControl: false,
      modalControlClasses: 'modal',
      modalDisable: false,
      action: ''
    };
  };

  toggle = () => {
    if (!this.state.modalDisable) {
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
    }
  };

  toggleControl = event => {
    if (!this.state.modalControl) {
      this.setState({
        modalControl: true,
        modalControlClasses: this.state.modalControlClasses + ' is-active',
        modalDisable: true,
        action: event.target.id
      });
    } else {
      this.setState({
        modalControl: false,
        modalControlClasses: 'modal',
        modalDisable: false,
        action: ''
      });
    }
  };

  componentDidMount () {
    // this.props.getProductsByCategory(query('id'));
  };

  render () {
    return (
      <div>
        <div className="box missing-products">
          <h1 className="title is-6 has-text-centered">Missing Products</h1>
          <ul>
            {
              this.props.unlinkedProducts.map(unlinkedProduct => {
                return (
                  <MissingProduct
                    key={unlinkedProduct.listing_id}
                    product={unlinkedProduct}
                    toggle={this.toggle}
                  />
                );
              })
            }
          </ul>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content modal-form">
            <div className="modal-container">
              <button className="button" onClick={event => this.toggleControl(event)}>
                Item
              </button>
              <button className="button" onClick={event => this.toggleControl(event)}>
                Bundle
              </button>
            </div>
          </div>
          <button className="modal-close is-large" onClick={this.toggle}></button>
        </div>
        <div className={this.state.modalControlClasses}>
          <div className="modal-background" onClick={this.toggleControl}></div>
          <div className="modal-content modal-form">
            <div className="modal-container">
              <ItemAdd toggle={this.toggleControl} />
            </div>
          </div>
          <button className="modal-close is-large"  onClick={this.toggleControl}></button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MissingProducts);
