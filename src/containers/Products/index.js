// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProductsEtsy } from '../../state/actions/stores';

// COMPONENTS
import Nav from './components/Nav';
import Kinds from './components/Kinds';
import Types from './components/Types';
import Categories from './components/Categories';
import CategoryControl from './components/CategoryControl';
import KindControl from './components/KindControl';
import TypeControl from './components/TypeControl';

// CONTAINERS
import Main from './containers/Products';
import Items from './containers/Products/containers/Items';
import Bundles from './containers/Products/containers/Bundles';
import Category from './containers/Products/containers/Category';
import Supplies from './containers/Supplies';
import Kind from './containers/Supplies/containers/Kind';
import Sources from './containers/Sources';
import Type from './containers/Sources/containers/Type';


// ==========

class Products extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <section className="products">
          <div className="columns is-fullheight is-marginless">
            <div className="column is-3 bar">
                <Switch>
                  <Route path="/products/supplies" component={Kinds} />
                  <Route path="/products/sources" component={Types} />
                  <Route path="/products" component={Categories} />
                </Switch>
              </div>
              <div className="column is-9 products-content">
                <Switch>
                  <Route path="/products/supplies" component={KindControl} />
                  <Route path="/products/sources" component={TypeControl} />
                  <Route path="/products" render={() => <CategoryControl getProductsEtsy={this.props.getProductsEtsy} />} />
                </Switch>
                <Nav />
              <div className="products-container">
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
              </div>
            </div>
          </div>
        </section>
      </BrowserRouter>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getProductsEtsy
}, dispatch);

export default connect(null, mapDispatchToProps)(Products);
