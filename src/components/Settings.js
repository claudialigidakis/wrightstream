// REACT
import React from 'react';

// REDUX
import { connect } from 'react-redux';

// ==========

class Settings extends React.Component {
  render () {
    console.log(this.props.user)
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
        <button className="button">Link Etsy</button>
        <button className="button">Link Shopify</button>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, null)(Settings);
