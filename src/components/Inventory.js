// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Nav from './inventory/Nav';
import Main from './inventory/Inventory';
import Estimator from './inventory/Estimator';
import Lists from './inventory/Lists';
import Orders from './inventory/Orders';

// ==========

class Products extends React.Component {
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

export default Products;
