// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogin } from '../actions/auth.actions';

// ==========

class Login extends React.Component {
  state = {
    shop_id: '',
    email: '',
    password: ''
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.userLogin(this.state, this.props.history);
  };

  render () {
    return (
      <section className="hero is-medium is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-4-desktop is-offset-4-desktop">
                <form onSubmit={this.handleLogin}>
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Shop"
                        id="shop"
                        value={this.state.shop_id}
                        onChange={e => this.setState({shop_id: e.target.value})}
                        required
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={this.state.email}
                        onChange={e => this.setState({email: e.target.value})}
                        required
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={this.state.password}
                        onChange={e => this.setState({password: e.target.value})}
                        required
                      />
                    </p>
                  </div>
                  <div className="control">
                    <button className="button is-primary is-fullwidth">Log In</button>
                  </div>
                  {this.props.showLoginError ? (
                    <p id="error" className="help is-danger">
                      Email or password is incorrect.
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

const mapStateToProps = state => ({showLoginError: state.auth.showLoginError});
const mapDispatchToProps = dispatch => ({userLogin: bindActionCreators(userLogin, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
