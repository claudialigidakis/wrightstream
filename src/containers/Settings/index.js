// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getShop } from '../../state/actions/shop';

// HELPERS
import request from '../../helpers/request';

// ==========

class Settings extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loginUrl: ''
    };
  };

  handleEtsyAuthClick = () => {
    window.location = this.state.loginUrl;
  };

  componentDidMount = async () => {
    this.props.getShop();
    const response = await request('/auth/etsy/loginUrl');
    this.setState({loginUrl: response.data.loginUrl});
  };

  render () {
    return (
      <section className="settings">
        <figure className="image">
          <img className="shop-img" src={this.props.shop.logo} alt={this.props.shop.shop_name} />
        </figure>
        <h1 className="title is-3 has-text-centered">{this.props.shop.shop_name}</h1>
        <p className="subtitle menu-label has-text-centered">
          Member since {this.props.shop.created_at}
        </p>
        <hr />
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <h1 className="title is-5">Shop Information</h1>
                  <aside className="menu">
                    <ul className="menu-list">
                      <li>
                        <span className="fa-icon">
                          <i className="fas fa-envelope"></i>
                        </span>
                        email
                      </li>
                      <li>
                        <span className="fa-icon">
                          <i className="fas fa-user"></i>
                        </span>
                        owner
                      </li>
                    </ul>
                    <p className="profile-bio">
                      Lorem ipsum stuff
                    </p>
                  </aside>
                  <hr />
                  <button className="button is-primary is-outlined is-fullwidth">Edit Shop</button>
                  <br />
                  <button className="button is-danger is-fullwidth">Delete Shop</button>
                </div>
              </div>
            </div>
            <div className="column is-8">
              <div className="card">
                <div className="card-content">
                  <h1 className="title is-5">Store Integrations</h1>
                  <button
                    className="button"
                    disabled={!this.state.loginUrl}
                    onClick={this.handleEtsyAuthClick}
                  >
                    Link Etsy
                  </button>
                  <button className="button">
                    Link Shopify
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  };
};

const mapStateToProps = state => ({
  shop: state.shop.shop
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getShop
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
