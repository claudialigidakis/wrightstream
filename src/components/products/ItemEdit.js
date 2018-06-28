// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLinkedProducts, getSupplies, editItem } from '../../actions/products';

// COMPONENTS
import ItemAddSupply from './ItemAddSupply';
import ItemAddStep from './ItemAddStep';

// MISC
const shortid = require('shortid');

// ==========

class ItemEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: this.props.item.name,
      linkedProduct: 'default',
      category: this.props.item.categories.find(category => category.id === this.props.item.category_id).name,
      photo: this.props.item.photo,
      stock: 0,
      supplies: [],
      suppliesInputs: [],
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
      this.props.editItem(this.props.item.id, this.state.name, category_id, this.state.photo, this.state.stock, this.state.supplies, JSON.stringify(steps));
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
    this.props.getSupplies();

    for (let ingredient of this.props.item.ingredients) {
      const {id, qty, qty_measure} = ingredient;
      const supply = {input: shortid.generate(), id, qty, qty_measure};
      this.state.supplies.push(supply);
      const input = supply.input;
      this.state.suppliesInputs.push(input);
      this.setState({
        supplies: this.state.supplies,
        suppliesInputs: this.state.suppliesInputs
      });
    }

    const stepsObject = JSON.parse(this.props.item.steps);
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
            supply={
              this.state.supplies.find(supply => supply.input === input) ? this.state.supplies.find(supply => supply.input === input) : null
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
          <button className="button is-primary is-outlined">Edit Item</button>
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
  editItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemEdit);
