// REACT
import React from 'react';

// REDUX
import { connect } from 'react-redux';

// ==========

class Source extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>
          {
            this.props.types.find(type => type.id === this.props.type_id) ?
            (
              this.props.types.find(type => type.id === this.props.type_id).name
            ) : null
          }
        </td>
        <td>{this.props.link}</td>
      </tr>
    );
  };
};

const mapStateToProps = state => ({
  types: state.products.types
});

export default connect(mapStateToProps, null)(Source);
