// REACT
import React from 'react';

// REDUX
//import { connect } from 'react-redux';

// ==========

class Supply extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.name} {this.props.kind_id} {this.props.source_id}</h1>
      </div>
    );
  };
};
//
// const mapStateToProps = state => ({
//   categories: state.products.categories
// });
//
// export default connect(mapStateToProps, null)(Product);

export default Supply
