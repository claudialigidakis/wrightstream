// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Shop from './components/Settings';

// ==========

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/shop" component={Settings} />
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;
