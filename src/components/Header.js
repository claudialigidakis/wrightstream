// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../actions/auth';

// ==========

class Header extends React.Component {
  render () {
    return (
      <div>
        <nav className="navbar is-fixed-top">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                WrightStream
              </a>
              <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div className="navbar-menu" id="navMenu">
              {this.props.authorized ?
                (
                  <div className="navbar-end">
                    <a className="navbar-item" href="/products">
                      Products
                    </a>
                    <a className="navbar-item" href="/inventory">
                      Inventory
                    </a>
                    <a className="navbar-item" href="/workstream">
                      WorkStream
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <a className="navbar-link is-hidden-touch">
                        <img className="profile" src={this.props.user.photo} alt={`${this.props.user.first_name} ${this.props.user.last_name}`} />
                        <span>{this.props.user.first_name}</span>
                      </a>
                      <div className="navbar-dropdown is-right">
                        <a className="navbar-item" href="/profile">
                          Profile
                        </a>
                        <a className="navbar-item" href="/settings">
                          Settings
                        </a>
                        <a className="navbar-item" href="/help">
                          Help
                        </a>
                        <hr className="navbar-divider" />
                        <a className="navbar-item is-active" href="/" onClick={() => this.props.userLogout()}>
                          Log Out
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="navbar-end">
                    <a className="navbar-item" href="/login">
                      Log In
                    </a>
                    <a className="navbar-item" href="/signup">
                      Sign Up
                    </a>
                  </div>
                )
              }
            </div>
          </div>
        </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
