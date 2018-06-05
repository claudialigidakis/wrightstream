// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Nav from './products/Nav';
import Main from './products/Products';
import Items from './products/Items';
import Bundles from './products/Bundles';
import Category from './products/Category';
import Categories from './products/Categories';
import Supplies from './products/Supplies';
import Kinds from './products/Kinds';
import Sources from './products/Sources';
import Types from './products/Types';

// ==========

class Products extends React.Component {
  render () {
    return (
      <section className="">
        <div className="columns is-fullheight is-marginless">
          <div className="column is-3 bar">
            <BrowserRouter>
              <Switch>
                <Route path="/products/supplies" component={Kinds} />
                <Route path="/products/sources" component={Types} />
                <Route path="/products" component={Categories} />
              </Switch>
            </BrowserRouter>
          </div>
          <div className="column is-9 products-content">
            <Nav />
            <div className="products-container">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/products" component={Main} />
                  <Route path="/products/items" component={Items} />
                  <Route path="/products/bundles" component={Bundles} />
                  <Route path="/products/category" component={Category} />
                  <Route path="/products/supplies" component={Supplies} />
                  <Route path="/products/sources" component={Sources} />
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
