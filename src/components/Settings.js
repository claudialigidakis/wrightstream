// REACT
import React from 'react';

// REDUX
import { connect } from 'react-redux';

// ==========

const Settings = props => {
  console.log('up props', props);
  return (
    <div>
      <h1>
        {props.user.shop_id}
        {/* need shop name in response as well */}
      </h1>
      <button className="button">Link Etsy</button>
      <button className="button">Link Shopify</button>
    </div>
  );
};

const mapStateToProps = state => ({user: state.auth.user});

export default connect(mapStateToProps, null)(Settings);
