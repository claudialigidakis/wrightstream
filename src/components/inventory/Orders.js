// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOrders } from '../../actions/inventory';
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
    this.setState({id})
  };

  handleSubmit = () => {
    // this.props.addOrder({order: this.props.estimatorSupplies});
  };

  componentDidMount () {
    this.props.getOrders();
    this.props.getSources();
    this.props.getSupplies();
  };

  render () {
    console.log(this.props.orders);
    return (
      <div className="columns estimator-content">
        <div className="column is-6">
          <h1 className="title is-5">Orders</h1>
          <ul>
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
        <div className="column is-6">
          <div className="estimator-supplies">
            {
              this.props.orders.find(order => order.id === this.state.id) ?
              this.props.sources.map(source => {
                return (
                  <OrdersSource
                    key={source.id}
                    source={source}
                    supplies={this.props.supplies}
                    orderSupplies={this.props.orders.find(order => order.id === this.state.id).supplies}
                  />
                )
              }) : null
            }
            <div className="has-text-right">
              <button
                className="button is-outlined is-primary"
                // disabled={
                //   this.props.estimatorSupplies.length > 0 ? false : true
                // }
                onClick={this.handleSubmit}
              >Save</button>
            </div>
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
  getSources,
  getSupplies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
