// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Nav from './components/Nav';

// CONTAINERS
import Main from './containers/Inventory';
import Estimator from './containers/Estimator';
import Lists from './containers/Lists';
import Orders from './containers/Orders';

// ==========

class Inventory extends React.Component {
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
      <BrowserRouter>
        <section className="inventory">
          <div className="columns">
            <div className="column is-12">
              <Nav
                toggle={this.toggle}
                inventoryClasses={this.state.inventoryClasses}
                estimatorClasses={this.state.estimatorClasses}
                listsClasses={this.state.listsClasses}
                ordersClasses={this.state.ordersClasses}
              />
              <div className="inventory-container">
                <Switch>
                  <Route exact path="/inventory" component={Main} />
                  <Route path="/inventory/estimator" component={Estimator} />
                  <Route path="/inventory/lists" render={(props) => <Lists redirectOrder={this.toggle} {...props} />} />
                  <Route path="/inventory/orders" component={Orders} />
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </BrowserRouter>
    );
  };
};

export default Inventory;
