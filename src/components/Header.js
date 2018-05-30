// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../actions/auth.actions';

// BULMA
import { Navbar, Input } from 'react-bulma-components/full';

// ==========

class Header extends React.Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Brand>
            <Navbar.Item href="/">
              WrightStream
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            {this.props.user.name ?
              (
                <Navbar.Container position="end">
                  <Navbar.Item Dropdown hoverable>
                    <Navbar.Link>
                      Name
                    </Navbar.Link>
                    <Navbar.Dropdown boxed>
                      <Navbar.Item href="/settings">
                        Settings
                      </Navbar.Item>
                      <Navbar.Divider />
                      <Navbar.Item active href="/" onClick={() => this.props.logout()}>
                        Log Out
                      </Navbar.Item>
                    </Navbar.Dropdown>
                  </Navbar.Item>
                </Navbar.Container>
              ) : (
                <Navbar.Container position="end">
                  <Navbar.Item href="/login">
                    Log In
                  </Navbar.Item>
                  <Navbar.Item href="/signup">
                    Sign Up
                  </Navbar.Item>
                </Navbar.Container>
              )
            }
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  };
};

const mapStateToProps = state => ({user: state.auth.user});
const mapDispatchToProps = dispatch => ({logout: bindActionCreators(userLogout, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
