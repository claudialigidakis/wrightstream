// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems, addBundle, editBundle } from '../../actions/products';

// COMPONENTS
import BundleAddItem from './BundleAddItem';
import ItemAddStep from './ItemAddStep';

// MISC
const shortid = require('shortid');

// ==========

class BundleAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: this.props.bundle ? this.props.bundle.name : (this.props.unlinkedProduct ? this.props.unlinkedProduct.title : ''),
      unlinkedProduct: this.props.bundle ? (this.props.products.find(product => product.product_id === this.props.bundle.bundle.product_id) ? this.props.products.find(product => product.product_id === this.props.bundle.bundle.product_id).title : 'custom') : (this.props.unlinkedProduct ? this.props.unlinkedProduct.title : 'default'),
      category: this.props.bundle ? this.props.bundle.categories.find(category => category.id === this.props.bundle.category_id).name : 'default',
      photo: this.props.bundle ? this.props.bundle.photo : (this.props.unlinkedProduct ? this.props.unlinkedProduct.image : ''),
      stock: 0,
      items: [],
      itemsInputs: this.props.bundle ? [] : [shortid.generate()],
      steps: [],
      stepsInputs: this.props.bundle ? [] : [shortid.generate()],
      invalid: false
    };
  };

  clear = () => {
    this.setState({
      name: this.props.bundle ? this.props.bundle.name : (this.props.unlinkedProduct ? this.props.unlinkedProduct.title : ''),
      unlinkedProduct: this.props.bundle ? (this.props.products.find(product => product.product_id === this.props.bundle.bundle.product_id) ? this.props.products.find(product => product.product_id === this.props.bundle.bundle.product_id).title : 'custom') : (this.props.unlinkedProduct ? this.props.unlinkedProduct.title : 'default'),
      category: this.props.bundle ? this.props.bundle.categories.find(category => category.id === this.props.bundle.category_id).name : 'default',
      photo: this.props.bundle ? this.props.bundle.photo : (this.props.unlinkedProduct ? this.props.unlinkedProduct.image : ''),
      stock: 0,
      items: [],
      itemsInputs: this.props.bundle ? [] : [shortid.generate()],
      steps: [],
      stepsInputs: this.props.bundle ? [] : [shortid.generate()],
      invalid: false
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !event.target.name.value
      || event.target.unlinkedProduct.value === 'default'
      || event.target.category.value === 'default'
      || this.state.items.length === 0
      || this.state.items.find(item => item.item_qty === 0)
      || this.state.items.find(item => !item.item_qty)
      || this.state.steps.length === 0
    ) {
      this.setState({
        invalid: true
      });
    } else {
      const category_id = this.props.categories.find(category => category.name === this.state.category).id;
      const unlinkedProduct_id = this.state.unlinkedProduct === 'custom' ? null : this.props.unlinkedProducts.find(unlinkedProduct => unlinkedProduct.title === this.state.unlinkedProduct).product_id;
      const steps = {};
      for (let i = 0; i < this.state.steps.length; i++) {
        steps[i+1] = this.state.steps[i].step;
      }
      if (this.props.bundle) {
        this.props.editBundle(this.props.bundle.id, this.state.name, unlinkedProduct_id, category_id, this.state.photo, this.state.stock, this.state.items, JSON.stringify(steps));
      } else {
        this.props.addBundle(this.state.name, unlinkedProduct_id, category_id, this.state.photo, this.state.stock, this.state.items, JSON.stringify(steps));
      }
      this.clear();
      this.props.toggle();
    }
  };

  appendItemsInput = () => {
    const input = shortid.generate();
    this.setState({itemsInputs: this.state.itemsInputs.concat([input])});
  };

  appendStepsInput = () => {
    const input = shortid.generate();
    this.setState({stepsInputs: this.state.stepsInputs.concat([input])});
  };

  deleteItemsInput = i => {
    this.state.itemsInputs.splice(i, 1);
    this.setState({itemsInputs: this.state.itemsInputs});
  };

  deleteStepsInput = i => {
    this.state.stepsInputs.splice(i, 1);
    this.setState({stepsInputs: this.state.stepsInputs});
  };

  addItem = (input, id) => {
    if (!this.state.items.find(item => item.input === input) && !this.state.items.find(item => item.id === id)) {
      this.setState({items: [...this.state.items, {input, id}]});
    } else {
      this.setState({items: this.state.items.map(item => item.input === input ? {...item, id} : {...item})});
    }
  };

  addItemQty = (input, qty) => {
    if (!this.state.items.find(item => item.input === input)) {
      this.setState({items: [...this.state.items, {input, item_qty: qty}]});
    } else {
      this.setState({items: this.state.items.map(item => item.input === input ? {...item, item_qty: qty} : {...item})});
    }
  };

  addStep = (input, step) => {
    if (!this.state.steps.find(step => step.input === input)) {
      this.setState({steps: [...this.state.steps, {input, step}]});
    } else {
      this.setState({steps: this.state.steps.map(existingStep => existingStep.input === input ? {...existingStep, step} : {...existingStep})});
    }
  }

  deleteItem = (input) => {
    this.setState({items: this.state.items.filter(item => item.input !== input)});
  };

  deleteStep = (input) => {
    this.setState({steps: this.state.steps.filter(step => step.input !== input)});
  };

  componentDidMount () {
    this.props.getItems();
    if (this.props.bundle) {
      const itemsInputsArray = this.props.bundle.ingredients.map(ingredient => shortid.generate());
      this.setState({
        items: this.props.bundle.ingredients.map((ingredient, i) => ({input: itemsInputsArray[i], id: ingredient.id, item_qty: ingredient.item_qty})),
        itemsInputs: itemsInputsArray
      });
      const stepsObject = JSON.parse(this.props.bundle.steps);
      const stepsArray = Object.keys(stepsObject).map(step => stepsObject[step]);
      const stepsInputsArray = stepsArray.map(step => shortid.generate());
      this.setState({
        steps: stepsArray.map((step, i) => ({input: stepsInputsArray[i], step})),
        stepsInputs: stepsInputsArray
      });
    }
  };

    render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Bundle Name"
                id="name"
                value={this.state.name}
                onChange={event => this.setState({name: event.target.value})}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <div className="select">
                <select
                  id="unlinkedProduct"
                  value={this.state.unlinkedProduct}
                  onChange={event => this.setState({unlinkedProduct: event.target.value})}
                >
                  <option value="default" disabled>Linked Product</option>
                  {
                    this.props.bundle ? (
                      this.props.products.find(product => product.product_id === this.props.bundle.bundle.product_id) ? (
                        <option value={this.props.products.find(product => product.product_id === this.props.bundle.bundle.product_id).title}>
                          {this.props.products.find(product => product.product_id === this.props.bundle.bundle.product_id).title}
                        </option>
                      ) : (
                        null
                      )
                    ) : null
                  }
                  {
                    this.props.unlinkedProducts.map(unlinkedProduct => {
                      return (
                        <option key={unlinkedProduct.product_id} value={unlinkedProduct.title}>{unlinkedProduct.title}</option>
                      )
                    })
                  }
                  <option value="custom">Custom</option>
                </select>
              </div>
            </div>
          </div>
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
          <h1 className="title">Items</h1>
          {this.state.itemsInputs.map((input, i) =>
            <BundleAddItem
              key={input}
              input={input}
              i={i}
              length={this.state.itemsInputs.length-1}
              appendInput={this.appendItemsInput}
              deleteInput={this.deleteItemsInput}
              addItem={this.addItem}
              addItemQty={this.addItemQty}
              deleteItem={this.deleteItem}
              items={this.props.items}
              selected={this.state.items}
              item={
                this.state.items.find(item => item.input === input) ? this.state.items.find(item => item.input === input) : null
              }
            />
          )}
          <h1 className="title">Steps</h1>
          {this.state.stepsInputs.map((input, i) =>
            <ItemAddStep
              key={input}
              input={input}
              i={i}
              length={this.state.stepsInputs.length-1}
              appendInput={this.appendStepsInput}
              deleteInput={this.deleteStepsInput}
              addStep={this.addStep}
              deleteStep={this.deleteStep}
              steps={this.state.steps}
              step={
                this.state.steps.find(step => step.input === input) ? this.state.steps.find(step => step.input === input) : null
              }
            />
          )}
          {this.state.invalid ? (
            <p id="error" className="help is-danger has-text-centered">
              Please fill out all information correctly.
            </p>
          ) : null}
          <br />
          <div className="control has-text-centered">
            <button className="button is-primary is-outlined">
              {this.props.bundle ? 'Edit Bundle' : 'Add Bundle'}
            </button>
          </div>
        </form>
      );
    };
  };

  const mapStateToProps = state => ({
    products: state.products.products,
    unlinkedProducts: state.products.unlinkedProducts,
    categories: state.products.categories,
    items: state.products.items
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getItems,
    addBundle,
    editBundle
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(BundleAdd);
