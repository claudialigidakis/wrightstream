// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class InventoryProduct extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      qty: this.props.product.stock_qty
    };
  };

  render () {
    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td>
          {
            this.props.categories.find(category => category.id === this.props.product.category_id) ?
            (
              this.props.categories.find(category => category.id === this.props.product.category_id).name
            ) : null
          }
        </td>
        <td>
          <input
            className="input"
            type="number"
            placeholder="0"
            id="qty"
            style={{width:'30%'}}
            value={this.state.qty}
            onChange={event => {
              this.setState({qty: Number(event.target.value)});
              this.props.editItem(this.props.product.id, Number(event.target.value));
            }}
          />
        </td>
      </tr>
    );
  };
};

const mapStateToProps = state => ({
  categories: state.products.categories
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InventoryProduct);
