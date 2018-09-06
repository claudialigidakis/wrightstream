// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteSource } from '../../../../state/actions/products';

// ==========

class SourceDelete extends React.Component {
  handleSubmit = event => {
    this.props.deleteSource(this.props.source.id);
    this.props.toggle();
    this.props.toggleParent();
  };

  render () {
    return (
      <form className="has-text-centered" onSubmit={this.handleSubmit}>
        Are you sure you want to delete
        <br />
        <small>{this.props.source.name}</small>?
        <br /><br />
        <div className="control has-text-centered">
          <button className="button is-danger">Delete</button>
        </div>
      </form>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteSource
}, dispatch);

export default connect(null, mapDispatchToProps)(SourceDelete);
