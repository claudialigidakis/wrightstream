// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteSupply } from '../../actions/products';

// ==========

class SupplyDelete extends React.Component {
  handleSubmit = event => {
    this.props.deleteSupply(this.props.supply.id);
    this.props.toggle();
    this.props.toggleParent();
  };

  render () {
    return (
      <form className="has-text-centered" onSubmit={this.handleSubmit}>
        Are you sure you want to delete
        <br />
        <small>{this.props.supply.name}</small>?
        <br /><br />
        <div className="control has-text-centered">
          <button className="button is-danger">Delete</button>
        </div>
      </form>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteSupply
}, dispatch);

export default connect(null, mapDispatchToProps)(SupplyDelete);
