// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems } from '../../actions/products';

// COMPONENTS
import Product from './Product';

// ==========

class Items extends React.Component {
  componentDidMount () {
    this.props.getItems();
  };

  render () {
    return this.props.items.map(item => {
      return (
        <Product
          key={item.id}
          id={item.id}
          name={item.name}
          category_id={item.category_id}
          photo={item.photo}
        />
      );
    });
  };
};

const mapStateToProps = state => ({
  items: state.products.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getItems
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Items);
