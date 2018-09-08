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
  render () {
    return (
      <BrowserRouter>
        <section className="inventory">
          <div className="columns">
            <div className="column is-12">
              <Nav />
              <div className="inventory-container">
                <Switch>
                  <Route exact path="/inventory" component={Main} />
                  <Route path="/inventory/estimator" component={Estimator} />
                  <Route path="/inventory/lists" component={Lists} />
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
