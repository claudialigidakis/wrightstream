// REACT
import React from 'react';

// REDUX
import { connect } from 'react-redux';

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
    const response = await request('/auth/etsy/loginUrl');
    this.setState({loginUrl: response.data.loginUrl});
  };

  render () {
    console.log(this.props.user);
    return (
      <section className="settings">
        <div className="columns">
          <div className="column is-4">
            <div className="card">
              <div className="card-content">
                <figure className="image is-128x128">
                  <img src={this.props.user.photo} alt={`${this.props.user.first_name} ${this.props.user.last_name}`} />
                </figure>
                <aside className="menu">
                  <h1 className="title is-4 has-text-centered">{this.props.user.first_name} {this.props.user.last_name}</h1>
                  <p className="subtitle menu-label has-text-centered">
                    {this.props.user.role_id}
                  </p>
                  <hr />
                  <ul className="menu-list">
                    <li>
                      <span className="fa-icon">
                        <i className="fas fa-envelope"></i>
                      </span>
                      {this.props.user.email}
                    </li>
                    <li>
                      <span className="fa-icon">
                        <i className="fas fa-birthday-cake"></i>
                      </span>
                      September 16, 1992
                    </li>
                  </ul>
                  <p className="profile-bio">
                    Lorem ipsum stuff
                  </p>
                </aside>
                <hr />
                <button className="button is-primary is-outlined is-fullwidth">Edit Profile</button>
              </div>
            </div>
          </div>
          <div className="column is-8">
            <div>
              <h1>
                {this.props.user.shops_id}
                {/* need shop name in response as well, ask claudia to join shop id into getshopbyemail function */}
              </h1>
              <h3>{this.props.user.id}</h3>
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
      </section>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, null)(Settings);
