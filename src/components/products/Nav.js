// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../../actions/auth';

// ==========

class Nav extends React.Component {
  render () {
    console.log(this.props.user)
    return (
      <div className="tabs is-centered">
        <ul>
          <li className="is-active" href="/"><a>Products</a></li>
          <li><a href="/supplies">Supplies</a></li>
          <li><a href="/sources">Sources</a></li>
        </ul>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
