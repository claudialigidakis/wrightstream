// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class OrdersSupply extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      qty: this.props.supply.supply_qty,
      status: this.props.supply.supply_status,
      lock: this.props.supply.supply_status === 3 ? true : false
    };
  };

  render () {
    return (
      <li style={{display: 'flex'}}>
        <span style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
          <span>
            {
              this.props.supplies.find(supply => supply.id === this.props.supply.supply_id).name
            }
          </span>
          <span>
            <input
              className="input"
              type="number"
              placeholder="0"
              id="qty"
              min="0"
              style={{width:'50%'}}
              value={this.state.qty}
              disabled={this.state.lock}
              onChange={event => {
                this.setState({qty: Number(event.target.value)});
                this.props.editSupply(this.props.supply.supply_id, this.state.status, Number(event.target.value));
              }}
            /> {this.props.supply.supply_measure_type}
          </span>
        </span>
        <div className="select" style={{width: '65%'}}>
          <select
            id="status"
            value={this.state.status}
            disabled={this.state.lock}
            onChange={event => {
              this.setState({status: parseInt(event.target.value, 10), lock: parseInt(event.target.value, 10) === 3 ? true : false});
              this.props.editSupply(this.props.supply.supply_id, parseInt(event.target.value, 10), this.state.qty);
            }}
          >
            <option value={1}>Not ordered</option>
            <option value={2}>Pending</option>
            <option value={3}>Delivered</option>
          </select>
        </div>
      </li>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrdersSupply);
