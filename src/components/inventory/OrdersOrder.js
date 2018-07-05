// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class OrdersOrder extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

  render () {
    return (
      <li>
        <button
          className="button is-primary"
          onClick={() => {
            this.props.select(this.props.order.id);
          }}
        >
          Order #{this.props.order.id}
        </button>
      </li>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrdersOrder);
