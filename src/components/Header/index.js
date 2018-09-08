// REACT
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom'

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../../state/actions/auth';

// ==========

class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productsClasses: 'navbar-item',
      inventoryClasses: 'navbar-item',
      workstreamClasses: 'navbar-item',
      mystreamClasses: 'navbar-item',
      adminClasses: 'navbar-item'
    };
  };

  toggle = link => {
    switch (link) {
      case 'products':
        this.setState({
          productsClasses: 'navbar-item is-active',
          inventoryClasses: 'navbar-item',
          workstreamClasses: 'navbar-item',
          mystreamClasses: 'navbar-item',
          adminClasses: 'navbar-item'
        });
        break;
      case 'inventory':
        this.setState({
          productsClasses: 'navbar-item',
          inventoryClasses: 'navbar-item is-active',
          workstreamClasses: 'navbar-item',
          mystreamClasses: 'navbar-item',
          adminClasses: 'navbar-item'
        });
        break;
      case 'workstream':
        this.setState({
          productsClasses: 'navbar-item',
          inventoryClasses: 'navbar-item',
          workstreamClasses: 'navbar-item is-active',
          mystreamClasses: 'navbar-item',
          adminClasses: 'navbar-item'
        });
        break;
      case 'mystream':
        this.setState({
          productsClasses: 'navbar-item',
          inventoryClasses: 'navbar-item',
          workstreamClasses: 'navbar-item',
          mystreamClasses: 'navbar-item is-active',
          adminClasses: 'navbar-item'
        });
        break;
      case 'admin':
        this.setState({
          productsClasses: 'navbar-item',
          inventoryClasses: 'navbar-item',
          workstreamClasses: 'navbar-item',
          mystreamClasses: 'navbar-item',
          adminClasses: 'navbar-item is-active'
        });
        break;
      default:
        this.setState({
          productsClasses: 'navbar-item',
          inventoryClasses: 'navbar-item',
          workstreamClasses: 'navbar-item',
          mystreamClasses: 'navbar-item',
          adminClasses: 'navbar-item'
        });
        break;
    }
  };

  componentDidMount () {
    if (window.location.pathname.includes('/products')) {
      this.setState({
        productsClasses: 'navbar-item is-active',
        inventoryClasses: 'navbar-item',
        workstreamClasses: 'navbar-item',
        mystreamClasses: 'navbar-item',
        adminClasses: 'navbar-item'
      });
    } else if (window.location.pathname.includes('/inventory')) {
      this.setState({
        productsClasses: 'navbar-item',
        inventoryClasses: 'navbar-item is-active',
        workstreamClasses: 'navbar-item',
        mystreamClasses: 'navbar-item',
        adminClasses: 'navbar-item'
      });
    } else if (window.location.pathname.includes('/workstream')) {
      this.setState({
        productsClasses: 'navbar-item',
        inventoryClasses: 'navbar-item',
        workstreamClasses: 'navbar-item is-active',
        mystreamClasses: 'navbar-item',
        adminClasses: 'navbar-item'
      });
    } else if (window.location.pathname.includes('/mystream')) {
      this.setState({
        productsClasses: 'navbar-item',
        inventoryClasses: 'navbar-item',
        workstreamClasses: 'navbar-item',
        mystreamClasses: 'navbar-item is-active',
        adminClasses: 'navbar-item'
      });
    } else if (window.location.pathname.includes('/admin')) {
      this.setState({
        productsClasses: 'navbar-item',
        inventoryClasses: 'navbar-item',
        workstreamClasses: 'navbar-item',
        mystreamClasses: 'navbar-item',
        adminClasses: 'navbar-item is-active'
      });
    }
  };

  render () {
    return (
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="../assets/wrightstream-logo-horizontal.svg" alt="WrightStream" />
          </Link>
          <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu" id="navMenu">
          {
            this.props.authorized ? (
              <div className="navbar-end">
                <div className="navbar-main">
                  <Link className={this.state.productsClasses} to="/products" onClick={() => {this.toggle('products')}}>Products</Link>
                  <Link className={this.state.inventoryClasses} to="/inventory" onClick={() => {this.toggle('inventory')}}>Inventory</Link>
                  <Link className={this.state.workstreamClasses} to="/workstream" onClick={() => {this.toggle('workstream')}}>WorkStream</Link>
                  <Link className={this.state.mystreamClasses} to="/mystream" onClick={() => {this.toggle('mystream')}}>MyStream</Link>
                  {this.props.user.role_id !== 3 ? <Link className={this.state.adminClasses} to="/admin" onClick={() => {this.toggle('admin')}}>Admin</Link> : null}
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link is-hidden-touch">
                    <img className="profile" src={this.props.user.photo} alt={`${this.props.user.first_name} ${this.props.user.last_name}`} />
                    <span>{this.props.user.first_name}</span>
                  </a>
                  <div className="navbar-dropdown is-right">
                    <Link className="navbar-item" to="/profile">
                      Profile
                    </Link>
                    <Link className="navbar-item" to="/settings">
                      Settings
                    </Link>
                    <Link className="navbar-item" to="/help">
                      Help
                    </Link>
                    <hr className="navbar-divider" />
                    <Link className="navbar-item is-active" to="/" onClick={() => {this.props.userLogout()}}>
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="navbar-end">
                <Link className="navbar-item" to="/login">
                  Log In
                </Link>
                <Link className="navbar-item" to="/signup">
                  Sign Up
                </Link>
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
