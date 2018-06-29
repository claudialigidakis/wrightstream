// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Nav from './inventory/Nav';
import Main from './inventory/Inventory';

// ==========

class Products extends React.Component {
  render () {
    return (
      <section className="inventory">
        <div className="columns is-fullheight is-marginless">
          <div className="column is-12">
            <Nav />
            <div className="inventory-container">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/inventory" component={Main} />
                  {/* <Route path="/products/items" component={Items} />
                  <Route path="/products/bundles" component={Bundles} />
                  <Route path="/products/category" component={Category} />
                  <Route exact path="/products/supplies" component={Supplies} />
                  <Route path="/products/supplies/kind" component={Kind} />
                  <Route exact path="/products/sources" component={Sources} />
                  <Route path="/products/sources/type" component={Type} /> */}
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

export default Products;
