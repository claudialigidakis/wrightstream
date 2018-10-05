// REACT
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom';

// ==========

class Nav extends React.Component {
  render () {
    return (
      <div className="tabs is-centered is-large inventory-tabs">
        <ul>
          <li className={this.props.inventoryClasses}><Link to="/inventory" onClick={() => {this.props.toggle('inventory')}}>Inventory</Link></li>
          <li className={this.props.estimatorClasses}><Link to="/inventory/estimator" onClick={() => {this.props.toggle('estimator')}}>Estimator</Link></li>
          <li className={this.props.listsClasses}><Link to="/inventory/lists" onClick={() => {this.props.toggle('lists')}}>Lists</Link></li>
          <li className={this.props.ordersClasses}><Link to="/inventory/orders" onClick={() => {this.props.toggle('orders')}}>Orders</Link></li>
        </ul>
      </div>
    );
  };
};

export default Nav;
