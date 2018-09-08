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
      <li style={{margin: '1rem'}}>
        <div className="columns">
          <div className="column is-4 is-paddingless" style={{display: 'flex', alignItems: 'center'}}>
            {
              this.props.supplies.find(supply => supply.id === this.props.supply.supply_id).name
            }
          </div>
          <div className="column is-4 is-paddingless" style={{display: 'flex', alignItems: 'center'}}>
            <input
              className="input"
              type="number"
              placeholder="0"
              id="qty"
              min="0"
              style={{width: '100px'}}
              value={this.state.qty}
              disabled={this.state.lock}
              onChange={event => {
                this.setState({qty: Number(event.target.value)});
                this.props.editSupply(this.props.supply.supply_id, this.state.status, Number(event.target.value));
              }}
            />
            <span style={{marginLeft: '.5rem'}}>{this.props.supply.supply_measure_type}</span>
          </div>
          <div className="column is-4 is-paddingless" style={{display: 'flex', alignItems: 'center'}}>
            <div className="select">
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
          </div>
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
