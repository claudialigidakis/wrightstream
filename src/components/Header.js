// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../actions/auth';

// ==========

class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productsClasses: 'navbar-item',
      inventoryClasses: 'navbar-item',
      workstreamClasses: 'navbar-item'
    };
  };

  componentDidMount () {
    if (window.location.pathname.includes('/products')) {
      this.setState({
        productsClasses: 'navbar-item is-active',
        inventoryClasses: 'navbar-item',
        workstreamClasses: 'navbar-item'
      });
    } else if (window.location.pathname.includes('/inventory')) {
      this.setState({
        productsClasses: 'navbar-item',
        inventoryClasses: 'navbar-item is-active',
        workstreamClasses: 'navbar-item'
      });
    } else if (window.location.pathname.includes('/workstream')) {
      this.setState({
        productsClasses: 'navbar-item',
        inventoryClasses: 'navbar-item',
        workstreamClasses: 'navbar-item is-active'
      });
    }
  };

  render () {
    return (
      <nav className="navbar is-fixed-top">
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
                <div className="navbar-main">
                  <a className={this.state.productsClasses} href="/products">Products</a>
                  <a className={this.state.inventoryClasses} href="/inventory">Inventory</a>
                  <a className={this.state.workstreamClasses} href="/workstream">WorkStream</a>
                </div>
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
      </nav>
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
