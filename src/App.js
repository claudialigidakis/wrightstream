// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
// import SignUp from './components/Signup';
// import LogIn from './components/Login';
// import Shop from './components/Settings';

// ==========

const App = () => {
  return (
    <div>
      <Header />
      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/login" />} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/shop" component={Settings} />
        </Switch>
      </BrowserRouter> */}
    </div>
  )
};

export default App;
