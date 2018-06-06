// REACT
import React from 'react';

// REDUX
import { connect } from 'react-redux';

import request from '../helpers/request'

// ==========

class Settings extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loginUrl: '',
      self:''
    }
  }

  handleEtsyAuthClick = () => {
    window.location = this.state.loginUrl
  }
  handleEtsySelfClick = () => {
    request('/etsy/self')
    .then(response => {
      this.setState({self:response.data})
    })
  }
  componentDidMount = async () => {
    const response = await request('/auth/etsy/loginUrl')
    this.setState({loginUrl: response.data.loginUrl})
  }
  render () {
    console.log(this.props.user, this.state)
    return (
      <div>
        <h1>
          {this.props.user.shop_id}
          {/* need shop name in response as well, ask claudia to join shop id into getshopbyemail function */}
        </h1>
        <h3>{this.props.user.id}</h3>
        <h3>{this.props.user.email}</h3>
        <img src={this.props.user.photo} alt={`${this.props.user.first_name} ${this.props.user.last_name}`} />
        <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
        <button
          className="button"
          disabled={!this.state.loginUrl}
          onClick={this.handleEtsyAuthClick}>
          Link Etsy
        </button>
        <button className="button">Link Shopify</button>
        <div>
          <button onClick={this.handleEtsySelfClick}>Get Self</button>
          <div>
            {JSON.stringify(this.state.self)}
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, null)(Settings);
