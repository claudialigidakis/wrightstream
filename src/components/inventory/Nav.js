// REACT
import React from 'react';

// ==========

class Nav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inventoryClasses: 'is-active',
      estimatorClasses: '',
      listsClasses: '',
      ordersClasses: ''
    };
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
          <li className={this.state.inventoryClasses}><a href="/inventory">Inventory</a></li>
          <li className={this.state.estimatorClasses}><a href="/inventory/estimator">Estimator</a></li>
          <li className={this.state.listsClasses}><a href="/inventory/lists">Lists</a></li>
          <li className={this.state.ordersClasses}><a href="/inventory/orders">Orders</a></li>
        </ul>
      </div>
    );
  };
};

export default Nav;
