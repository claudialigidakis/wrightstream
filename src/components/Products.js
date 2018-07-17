// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProductsEtsy } from '../actions/stores';

// COMPONENTS
import Nav from './products/Nav';
import CategoryControl from './products/CategoryControl';
import KindControl from './products/KindControl';
import TypeControl from './products/TypeControl';
import Main from './products/Products';
import Items from './products/Items';
import Bundles from './products/Bundles';
import Category from './products/Category';
import Categories from './products/Categories';
import Supplies from './products/Supplies';
import Kind from './products/Kind';
import Kinds from './products/Kinds';
import Sources from './products/Sources';
import Type from './products/Type';
import Types from './products/Types';

// ==========

class Products extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

  render () {
    return (
      <section className="products">
        <div className="columns is-fullheight is-marginless">
          <div className="column is-3 bar">
            <BrowserRouter>
              <Switch>
                <Route path="/products/supplies" component={Kinds} />
                <Route path="/products/sources" component={Types} />
                <Route path="/products" render={() => <Categories getEtsyProducts={this.props.getProductsEtsy} />} />
              </Switch>
            </BrowserRouter>
          </div>
          <div className="column is-9 products-content">
            <BrowserRouter>
              <Switch>
                <Route path="/products/sources" component={TypeControl} />
                <Route path="/products/supplies" component={KindControl} />
                <Route path="/products" component={CategoryControl} />
              </Switch>
            </BrowserRouter>
            <Nav />
            <div className="products-container">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/products" component={Main} />
                  <Route path="/products/items" component={Items} />
                  <Route path="/products/bundles" component={Bundles} />
                  <Route path="/products/category" component={Category} />
                  <Route exact path="/products/supplies" component={Supplies} />
                  <Route path="/products/supplies/kind" component={Kind} />
                  <Route exact path="/products/sources" component={Sources} />
                  <Route path="/products/sources/type" component={Type} />
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

const mapStateToProps = state => ({
  getProductsEtsy
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
