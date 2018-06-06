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
    return (
      <div className="columns">
        {
          this.props.items.map(item => {
            return (
              <Product
                key={item.id}
                id={item.id}
                product="item"
                name={item.name}
                category_id={item.category_id}
                photo={item.photo}
                ingredients={item.supplies}
                steps={item.steps}
              />
            );
          })
        }
      </div>
    );
  };
};

const mapStateToProps = state => ({
  items: state.products.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getItems
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Items);
