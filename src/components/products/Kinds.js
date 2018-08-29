// REACT
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom'

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getKinds } from '../../state/actions/products';

// ==========

class Kinds extends React.Component {
  componentDidMount () {
    this.props.getKinds();
  };

  render () {
    return (
      <aside className="menu">
        <p className="menu-label">
          Browse
        </p>
        <ul className="menu-list">
          <li><Link to="/products/supplies">All Supplies</Link></li>
          <li><a className="disable">Archived</a></li>
        </ul>
        <p className="menu-label">
          Kinds
        </p>
        <ul className="menu-list">
          {
            this.props.kinds.map(kind => {
              return (
                <li key={kind.id}><Link to={`/products/supplies/kind?id=${kind.id}`}>{kind.name}</Link></li>
              )
            })
          }
        </ul>
        <p className="menu-label">
          Filter
        </p>
        <ul className="menu-list">
          <li><a className="disable">Color</a></li>
          <li><a className="disable">Material</a></li>
          <li><a className="disable">Source</a></li>
        </ul>
        <p className="menu-label">
          Sort
        </p>
        <ul className="menu-list">
          <li><a className="disable">Name</a></li>
          <li><a className="disable">Date Added</a></li>
          <li><a className="disable">Kind</a></li>
          <li><a className="disable">Source</a></li>
        </ul>
      </aside>
    );
  };
};

const mapStateToProps = state => ({
  kinds: state.products.kinds
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getKinds
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Kinds);
