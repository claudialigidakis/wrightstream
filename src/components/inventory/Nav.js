// REACT
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom'

// ==========

class Nav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inventoryClasses: '',
      estimatorClasses: '',
      listsClasses: '',
      ordersClasses: ''
    };
  };

  toggle = link => {
    switch (link) {
      case 'inventory':
        this.setState({
          inventoryClasses: 'is-active',
          estimatorClasses: '',
          listsClasses: '',
          ordersClasses: ''
        });
        break;
      case 'estimator':
        this.setState({
          inventoryClasses: '',
          estimatorClasses: 'is-active',
          listsClasses: '',
          ordersClasses: ''
        });
        break;
      case 'lists':
        this.setState({
          inventoryClasses: '',
          estimatorClasses: '',
          listsClasses: 'is-active',
          ordersClasses: ''
        });
        break;
      case 'orders':
        this.setState({
          inventoryClasses: '',
          estimatorClasses: '',
          listsClasses: '',
          ordersClasses: 'is-active'
        });
        break;
      default:
        this.setState({
          inventoryClasses: '',
          estimatorClasses: '',
          listsClasses: '',
          ordersClasses: ''
        });
        break;
    }
  };

  componentDidMount () {
    if (window.location.pathname.includes('/inventory/estimator')) {
      this.setState({
        inventoryClasses: '',
        estimatorClasses: 'is-active',
        listsClasses: '',
        ordersClasses: ''
      });
    } else if (window.location.pathname.includes('/inventory/lists')) {
      this.setState({
        inventoryClasses: '',
        estimatorClasses: '',
        listsClasses: 'is-active',
        ordersClasses: ''
      });
    } else if (window.location.pathname.includes('/inventory/orders')) {
      this.setState({
        inventoryClasses: '',
        estimatorClasses: '',
        listsClasses: '',
        ordersClasses: 'is-active'
      });
    } else {
      this.setState({
        inventoryClasses: 'is-active',
        estimatorClasses: '',
        listsClasses: '',
        ordersClasses: ''
      });
    }
  };

  render () {
    return (
      <div className="tabs is-centered is-large inventory-tabs">
        <ul>
          <li className={this.state.inventoryClasses}><Link to="/inventory" onClick={() => {this.toggle('inventory')}}>Inventory</Link></li>
          <li className={this.state.estimatorClasses}><Link to="/inventory/estimator" onClick={() => {this.toggle('estimator')}}>Estimator</Link></li>
          <li className={this.state.listsClasses}><Link to="/inventory/lists" onClick={() => {this.toggle('lists')}}>Lists</Link></li>
          <li className={this.state.ordersClasses}><Link to="/inventory/orders" onClick={() => {this.toggle('orders')}}>Orders</Link></li>
        </ul>
      </div>
    );
  };
};

export default Nav;
