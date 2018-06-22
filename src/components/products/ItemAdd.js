// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLinkedProducts, getSupplies, addItem } from '../../actions/products';

// COMPONENTS
import ItemAddSupply from './ItemAddSupply';

// ==========

class ItemAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      linkedProduct: 'default',
      category: 'default',
      photo: '',
      stock: 0,
      supplies: [{id: 1, qty_measure: 'lb', qty: 3}],
      steps: JSON.stringify({'1': 'one'}),
      invalid: false,
      inputs: [0]
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !event.target.name.value
      // || event.target.linkedProduct.value === 'default'
      || event.target.category.value === 'default'
    ) {
      this.setState({
        invalid: true
      });
    } else {
      const category_id = this.props.categories.find(category => category.name === this.state.category).id;
      // if (this.state.linkedProduct === 'custom') {
      //   const linkedProduct_id = 0;
      // } else {
      //   const linkedProduct_id = this.props.linkedProducts.find(linkedProduct => linkedProduct.name === this.state.linkedProduct).id;
      // }
      this.props.addItem(this.state.name, category_id, this.state.photo, this.state.stock, this.state.supplies, this.state.steps);
      this.clear();
      this.props.toggle();
    }
  };

  appendInput = () => {
    const newInput = this.state.inputs.length;
    this.setState({ inputs: this.state.inputs.concat([newInput]) });
  }

  deleteInput = () => {
    const newInput = this.state.inputs.length;
    this.setState({ inputs: this.state.inputs.concat([newInput]) });
  }

  clear = () => {
    this.setState({
      name: '',
      linkedProduct: 'default',
      category: 'default',
      photo: '',
      stock: 0,
      supplies: [{id: 1, qty_measure: 'lb', qty: 3}],
      steps: JSON.stringify({'1': 'one'}),
      invalid: false,
      inputs: [0]
    });
  };

  componentDidMount () {
    this.props.getLinkedProducts();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Item Name"
              id="name"
              value={this.state.name}
              onChange={event => this.setState({name: event.target.value})}
            />
          </div>
        </div>
        {/* <div className="field">
          <div className="control">
            <div className="select">
              <select
                id="linkedProduct"
                value={this.state.linkedProduct}
                onChange={event => this.setState({linkedProduct: event.target.value})}
                >
                <option value="default" disabled>Linked Product</option>
                {
                  this.props.linkedProducts.map(linkedProduct => {
                    return (
                      <option key={linkedProduct.id} value={linkedProduct.name}>{linkedProduct.name}</option>
                    )
                  })
                }
                <option value="custom">Custom</option>
              </select>
            </div>
          </div>
        </div> */}
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Photo URL"
              id="photo"
              value={this.state.photo}
              onChange={event => this.setState({photo: event.target.value})}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="select">
              <select
                id="category"
                value={this.state.category}
                onChange={event => this.setState({category: event.target.value})}
                >
                <option value="default" disabled>Category</option>
                {
                  this.props.categories.map(category => {
                    return (
                      <option key={category.id} value={category.name}>{category.name}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </div>
        <h1 className="title">Supplies</h1>
        {this.state.inputs.map(input =>
          <ItemAddSupply
            key={input}
            i={input}
            length={this.state.inputs.length-1}
            appendInput={this.appendInput}
            deleteInput={this.deleteInput}
          />
        )}
        {this.state.invalid ? (
          <p id="error" className="help is-danger has-text-centered">
            Please fill out all information correctly.
          </p>
        ) : null}
        <br />
        <div className="control has-text-centered">
          <button className="button is-primary is-outlined">Add Item</button>
        </div>
      </form>
    );
  };
};

const mapStateToProps = state => ({
  linkedProducts: state.products.linkedProducts,
  categories: state.products.categories,
  supplies: state.products.supplies
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLinkedProducts,
  getSupplies,
  addItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemAdd);
