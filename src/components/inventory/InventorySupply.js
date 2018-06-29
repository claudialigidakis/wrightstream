// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class InventorySupply extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      qty: this.props.supply.stock_qty
    };
  };

  render () {
    return (
      <tr>
        <td>{this.props.supply.name}</td>
        <td>
          {
            this.props.kinds.find(kind => kind.id === this.props.supply.kind_id) ?
            (
              this.props.kinds.find(kind => kind.id === this.props.supply.kind_id).name
            ) : null
          }
        </td>
        <td>
          <input
            className="input"
            type="number"
            placeholder="0"
            id="qty"
            style={{width:'50%'}}
            value={this.state.qty}
            onChange={event => {
              this.setState({qty: Number(event.target.value)});
              this.props.editSupply(this.props.supply.id, Number(event.target.value));
            }}
          /> {this.props.supply.stock_qty_measure_type}
        </td>
      </tr>
    );
  };
};

const mapStateToProps = state => ({
  kinds: state.products.kinds
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InventorySupply);
