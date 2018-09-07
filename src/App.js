// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser } from './state/actions/auth';

// COMPONENTS
import Header from './components/Header';
import Inventory from './components/Inventory';
import WorkStream from './components/WorkStream';
import MyStream from './components/MyStream';
import EtsyCallback from './components/EtsyCallback';

// CONTAINERS
import Products from './containers/Products';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Settings from './containers/Settings';
import Admin from './containers/Admin';

// ==========

class App extends React.Component {
  componentDidMount () {
    this.props.getUser();
  };

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={() => <Redirect to="/login" />} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/settings" component={Settings} />
              <Route path="/products" component={Products} />
              <Route path="/inventory" component={Inventory} />
              <Route path="/workstream" component={WorkStream} />
              <Route path="/mystream" component={MyStream} />
              <Route path="/admin" component={Admin} />
              <Route path="/auth/callback/etsy" component={EtsyCallback} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user,
  authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
