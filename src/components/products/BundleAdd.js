// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLinkedProducts, getItems, addBundle } from '../../actions/products';

// COMPONENTS
import ItemAddSupply from './ItemAddSupply';
import ItemAddStep from './ItemAddStep';

// MISC
const shortid = require('shortid');

// ==========

class BundleAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      linkedProduct: 'default',
      category: 'default',
      photo: '',
      stock: 0,
      supplies: [],
      suppliesInputs: [shortid.generate()],
      steps: [],
      stepsInputs: [shortid.generate()],
      invalid: false
    };
  };

  clear = () => {
    this.setState({
      name: '',
      linkedProduct: 'default',
      category: 'default',
      photo: '',
      stock: 0,
      supplies: [],
      suppliesInputs: [shortid.generate()],
      steps: [],
      stepsInputs: [shortid.generate()],
      invalid: false
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !event.target.name.value
      // || event.target.linkedProduct.value === 'default'
      || event.target.category.value === 'default'
      || this.state.supplies.length === 0
      || this.state.supplies.find(supply => supply.qty === 0)
      || this.state.supplies.find(supply => !supply.qty)
      || this.state.supplies.find(supply => !supply.qty_measure)
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
      this.props.addBundle(this.state.name, category_id, this.state.photo, this.state.stock, this.state.supplies, JSON.stringify(steps));
      this.clear();
      this.props.toggle();
    }
  };

  appendSuppliesInput = () => {
    const newInput = shortid.generate();
    this.setState({suppliesInputs: this.state.suppliesInputs.concat([newInput])});
  };

  appendStepsInput = () => {
    const newInput = shortid.generate();
    this.setState({stepsInputs: this.state.stepsInputs.concat([newInput])});
  };

  deleteSuppliesInput = i => {
    this.state.suppliesInputs.splice(i, 1);
    this.setState({suppliesInputs: this.state.suppliesInputs});
  };

  deleteStepsInput = i => {
    this.state.stepsInputs.splice(i, 1);
    this.setState({stepsInputs: this.state.stepsInputs});
  };

  addSupply = (input, id) => {
    if (!this.state.supplies.find(supply => supply.input === input) && !this.state.supplies.find(supply => supply.id === id)) {
      this.state.supplies.push({input, id});
      this.setState({supplies: this.state.supplies});
    } else if (this.state.supplies.find(supply => supply.input === input) && !this.state.supplies.find(supply => supply.id === id)) {
      const supplies = this.state.supplies;
      const index = supplies.findIndex(supply => supply.input === input);
      supplies[index].id = id;
      this.setState({supplies: supplies});
    }
  };

  addSupplyQty = (input, qty) => {
    if (!this.state.supplies.find(supply => supply.input === input)) {
      this.state.supplies.push({input, qty});
      this.setState({supplies: this.state.supplies});
    } else {
      const supplies = this.state.supplies;
      const index = supplies.findIndex(supply => supply.input === input);
      supplies[index].qty = qty;
      this.setState({supplies: supplies});
    }
  };

  addSupplyMeasure = (input, measure) => {
    const supplies = this.state.supplies;
    const index = supplies.findIndex(supply => supply.input === input);
    supplies[index].qty_measure = measure;
    this.setState({supplies: supplies});
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

  deleteSupply = (input) => {
    this.setState({supplies: this.state.supplies.filter(supply => supply.input !== input)});
  };

  deleteStep = (input) => {
    this.setState({steps: this.state.steps.filter(step => step.input !== input)});
  };

  componentDidMount () {
    this.props.getLinkedProducts();
    this.props.getItems();
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
          {this.state.suppliesInputs.map((input, i) =>
            <ItemAddSupply
              key={input}
              input={input}
              i={i}
              length={this.state.suppliesInputs.length-1}
              appendInput={this.appendSuppliesInput}
              deleteInput={this.deleteSuppliesInput}
              addSupply={this.addSupply}
              addSupplyQty={this.addSupplyQty}
              addSupplyMeasure={this.addSupplyMeasure}
              deleteSupply={this.deleteSupply}
              supplies={this.props.supplies}
              selected={this.state.supplies}
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
            />
          )}
          {this.state.invalid ? (
            <p id="error" className="help is-danger has-text-centered">
              Please fill out all information correctly.
            </p>
          ) : null}
          <br />
          <div className="control has-text-centered">
            <button className="button is-primary is-outlined">Add Bundle</button>
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
    addBundle
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(BundleAdd);
