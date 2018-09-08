// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// COMPONENTS
import AdminMenu from './containers/AdminMenu';
import Dashboard from './containers/Dashboard';
import Staff from './containers/Staff';
import Products from './containers/Products';
import Purchases from './containers/Purchases';
import Supplies from './containers/Supplies';

// ==========

class Admin extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <section className="admin">
          <div className="columns is-fullheight is-marginless">
            <div className="column is-3 bar">
              <Switch>
                <Route path="/admin" component={AdminMenu} />
              </Switch>
            </div>
            <div className="column is-9 admin-content">
              <div className="admin-container">
                <Switch>
                  <Route exact path="/admin" component={Dashboard} />
                  <Route path="/admin/dashboard" component={Dashboard} />
                  <Route path="/admin/staff" component={Staff} />
                  <Route path="/admin/products" component={Products} />
                  <Route path="/admin/purchases" component={Purchases} />
                  <Route path="/admin/supplies" component={Supplies} />
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </BrowserRouter>
    );
  };
};

export default Admin;
