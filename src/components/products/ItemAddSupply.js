// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSupplies } from '../../actions/products';

// ==========

class ItemAddSupply extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      supply: 'default'
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

      });
    } else {
      const category_id = this.props.categories.find(category => category.name === this.state.category).id;

      this.props.addItem(this.state.name, category_id, this.state.photo, this.state.stock, this.state.supplies, this.state.steps);
      this.clear();
      this.props.toggle();
    }
  };

  clear = () => {
    this.setState({
      supply: 'default'
    });
  };

  componentDidMount () {
    this.props.getSupplies();
  }

  render () {
    console.log(this.props);
    return (

        <div className="field is-horizontal">

          <div className="field-body">

            <div className="field" style={{ width: '80%' }}>
              <div className="control">
                <div className="select">
                  <select
                    id="supply"
                    value={this.state.supply}
                    onChange={event => this.setState({supply: event.target.value})}
                    >
                    <option value="default" disabled>Supply</option>
                    {
                      this.props.supplies.map(supply => {
                        return (
                          <option key={supply.id} value={supply.name}>{supply.name}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="Quantity"
                  id="quantity"
                  // value={this.state.photo}
                  // onChange={event => this.setState({photo: event.target.value})}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <div className="select">
                  <select
                    id="measure"
                    // value={this.state.category}
                    // onChange={event => this.setState({category: event.target.value})}
                    >
                    <option value="default" disabled>Measurement</option>
                    {/* {
                      this.props.categories.map(category => {
                        return (
                          <option key={category.id} value={category.name}>{category.name}</option>
                        )
                      })
                    } */}
                  </select>
                </div>
              </div>
            </div>
            <div className="control">
              {
                this.props.i === this.props.length ? (
                  <button type="button" className="button is-success is-outlined" onClick={this.props.appendInput}>+</button>
                ) : (
                  <button type="button" className="button is-danger is-outlined" onClick={this.props.appendInput}>-</button>
                )
              }
            </div>
          </div>
        </div>

    );
  };
};

const mapStateToProps = state => ({
  supplies: state.products.supplies
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSupplies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemAddSupply);
