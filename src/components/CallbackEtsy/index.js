// REACT
import React from 'react';

// ROUTER
import { Redirect } from 'react-router-dom';

// HELPER
import qs from 'query-string';
import request from '../../helpers/request';

// ==========

class CallbackEtsy extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true
    };
  };

  componentDidMount () {
    request('/auth/etsy/token', 'post', qs.parse(this.props.location.search))
      .then(response => {
        this.setState({loading: false});
      });
  };

  render () {
    if (this.state.loading) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <Redirect to='/settings' />
      );
    }
  };
};

export default CallbackEtsy;
