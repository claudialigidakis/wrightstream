// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../actions/auth';

// COMPONENTS
import Bar from './products/Bar';
import Nav from './products/Nav';
import Main from './products/Main';

// ==========

class Products extends React.Component {
  render () {
    console.log(this.props.user)
    return (
      <section className="">
        <div className="columns is-fullheight">
          <div className="column is-3 bar">
            <Bar />
          </div>
          <div className="column is-9">
            <Nav />
            <Main />
          </div>
        </div>
      </section>
    );
  };
};


const mapStateToProps = state => ({
  user: state.auth.user,
  authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
