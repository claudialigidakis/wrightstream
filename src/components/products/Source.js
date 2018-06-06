// REACT
import React from 'react';

// REDUX
//import { connect } from 'react-redux';

// ==========

class Source extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.name} {this.props.type_id} {this.props.link}</h1>
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

export default Source
