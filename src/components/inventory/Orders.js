// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOrders, editOrderSupply } from '../../actions/inventory';
import { getSources, getSupplies } from '../../actions/products';

// COMPONENTS
import OrdersOrder from './OrdersOrder';
import OrdersSource from './OrdersSource';

// ==========

class Orders extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: null
    };
  };

  select = id => {
    this.setState({id});
  };

  editSupply = (supply_id, supply_status, supply_qty) => {
    this.props.editOrderSupply(this.state.id, supply_id, supply_status, supply_qty);
  };

  componentDidMount () {
    this.props.getOrders();
    this.props.getSources();
    this.props.getSupplies();
  };

  render () {
    return (
      <div className="columns estimator-content">
        <div className="column is-4">
          <h1 className="title is-5">Orders</h1>
          <ul className="inventory-orders">
            {
              this.props.orders.map(order => {
                return (
                  <OrdersOrder
                    key={order.id}
                    order={order}
                    select={this.select}
                  />
                );
              })
            }
          </ul>
        </div>
        <div className="column is-8">
          <div className={this.props.orders.find(order => order.id === this.state.id) ? 'estimator-supplies' : 'estimator-supplies hide'}>
            {
              this.props.orders.find(order => order.id === this.state.id) ?
              this.props.sources.map(source => {
                return (
                  <OrdersSource
                    key={source.id}
                    source={source}
                    supplies={this.props.supplies}
                    orderSupplies={this.props.orders.find(order => order.id === this.state.id).supplies}
                    editSupply={this.editSupply}
                  />
                )
              }) : null
            }
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  orders: state.inventory.orders,
  sources: state.products.sources,
  supplies: state.products.supplies
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getOrders,
  editOrderSupply,
  getSources,
  getSupplies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
