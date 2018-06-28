// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLinkedProducts, getItems, editBundle } from '../../actions/products';

// COMPONENTS
import BundleAddItem from './BundleAddItem';
import ItemAddStep from './ItemAddStep';

// MISC
const shortid = require('shortid');

// ==========

class BundleEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: this.props.bundle.name,
      linkedProduct: 'default',
      category: this.props.bundle.categories.find(category => category.id === this.props.bundle.category_id).name,
      photo: this.props.bundle.photo,
      stock: 0,
      items: [],
      itemsInputs: [],
      steps: [],
      stepsInputs: [],
      invalid: false
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !event.target.name.value
      // || event.target.linkedProduct.value === 'default'
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
      // if (this.state.linkedProduct === 'custom') {
      //   const linkedProduct_id = 0;
      // } else {
      //   const linkedProduct_id = this.props.linkedProducts.find(linkedProduct => linkedProduct.name === this.state.linkedProduct).id;
      // }
      const steps = {};
      for (let i = 0; i < this.state.steps.length; i++) {
        steps[i+1] = this.state.steps[i].step;
      }
      this.props.editBundle(this.props.bundle.id, this.state.name, category_id, this.state.photo, this.state.stock, this.state.items, JSON.stringify(steps));
      this.props.toggle();
    }
  };

  appendItemsInput = () => {
    const newInput = shortid.generate();
    this.setState({itemsInputs: this.state.itemsInputs.concat([newInput])});
  };

  appendStepsInput = () => {
    const newInput = shortid.generate();
    this.setState({stepsInputs: this.state.stepsInputs.concat([newInput])});
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
      this.state.items.push({input, id});
      this.setState({items: this.state.items});
    } else if (this.state.items.find(item => item.input === input) && !this.state.items.find(item => item.id === id)) {
      const items = this.state.items;
      const index = items.findIndex(item => item.input === input);
      items[index].id = id;
      this.setState({items: items});
    }
  };

  addItemQty = (input, qty) => {
    if (!this.state.items.find(item => item.input === input)) {
      this.state.items.push({input, qty});
      this.setState({items: this.state.items});
    } else {
      const items = this.state.items;
      const index = items.findIndex(item => item.input === input);
      items[index].item_qty = qty;
      this.setState({items: items});
    }
  };

  addStep = (input, step) => {
    if (!this.state.steps.find(step => step.input === input)) {
      this.state.steps.push({input, step});
      this.setState({steps: this.state.steps});
    } else {
      const steps = this.state.steps;
      const index = steps.findIndex(step => step.input === input);
      steps[index].step = step;
      this.setState({steps: steps});
    }
  }

  deleteItem = (input) => {
    this.setState({items: this.state.items.filter(item => item.input !== input)});
  };

  deleteStep = (input) => {
    this.setState({steps: this.state.steps.filter(step => step.input !== input)});
  };

  componentDidMount () {
    this.props.getLinkedProducts();
    this.props.getItems();

    for (let ingredient of this.props.bundle.ingredients) {
      const {id, item_qty} = ingredient;
      const item = {input: shortid.generate(), id, item_qty};
      this.state.items.push(item);
      const input = item.input;
      this.state.itemsInputs.push(input);
      this.setState({
        items: this.state.items,
        itemsInputs: this.state.itemsInputs
      });
    }

    const stepsObject = JSON.parse(this.props.bundle.steps);
    const stepsArray = Object.keys(stepsObject).map(step => stepsObject[step]);
    for (let step of stepsArray) {
      const eachStep = {input: shortid.generate(), step};
      this.state.steps.push(eachStep);
      const input = eachStep.input;
      this.state.stepsInputs.push(input);
      this.setState({
        steps: this.state.steps,
        stepsInputs: this.state.stepsInputs
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
            <button className="button is-primary is-outlined">Edit Bundle</button>
          </div>
        </form>
      );
    };
  };

  const mapStateToProps = state => ({
    linkedProducts: state.products.linkedProducts,
    categories: state.products.categories,
    items: state.products.items
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getLinkedProducts,
    getItems,
    editBundle
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(BundleEdit);
