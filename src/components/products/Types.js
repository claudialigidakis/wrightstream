// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTypes } from '../../actions/products';

// ==========

class Types extends React.Component {
  componentDidMount () {
    this.props.getTypes();
  };

  render () {
    return (
      <aside className="menu">
        <p className="menu-label">
          Browse
        </p>
        <ul className="menu-list">
          <li><a href="/products/supplies">All Sources</a></li>
          <li><a className="disable">Archived</a></li>
        </ul>
        <p className="menu-label">
          Types
        </p>
        <ul className="menu-list">
          {
            this.props.types.map(type => {
              return (
                <li key={type.id}><a href={`/products/sources/type?id=${type.id}`}>{type.name}</a></li>
              )
            })
          }
        </ul>
        <p className="menu-label">
          Sort
        </p>
        <ul className="menu-list">
          <li><a className="disable">Name</a></li>
          <li><a className="disable">Date Added</a></li>
          <li><a className="disable">Type</a></li>
        </ul>
      </aside>
    );
  };
};

const mapStateToProps = state => ({
  types: state.products.types
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTypes
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Types);
