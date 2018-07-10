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
      products:'',
      purchases:''
    }
  }

  handleEtsyAuthClick = () => {
    window.location = this.state.loginUrl
  }
  handleEtsyProductsClick = () => {
    request('/etsy/findAllListingActive')
    .then(response => {
      console.log(response.data);
      this.setState({products:response.data})
    })
  }
  handleEtsyPurchasesClick = () => {
    request('/etsy/findAllPurchases')
    .then(response => {
      console.log(response.data);
      this.setState({purchases:response.data})
    })
  }

  componentDidMount = async () => {
    const response = await request('/auth/etsy/loginUrl')
    this.setState({loginUrl: response.data.loginUrl})
  }

  render () {
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
          <button onClick={this.handleEtsyProductsClick}>Get Products</button>
          <button onClick={this.handleEtsyPurchasesClick}>Get Purchases</button>
          <div>
            {`products: ${JSON.stringify(this.state.products)}`}
            {`purchases: ${JSON.stringify(this.state.purchases)}`}
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
