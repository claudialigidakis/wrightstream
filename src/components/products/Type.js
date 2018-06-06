// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSourcesByType } from '../../actions/products';

// HELPERS
import query from '../../helpers/query';

// COMPONENTS
import Source from './Source';

// ==========

class Type extends React.Component {
  componentDidMount () {
    this.props.getSourcesByType(query('id'));
  };

  render () {
    return this.props.sourcesByType.map(source => {
      return (
        <Source
          key={source.id}
          id={source.id}
          name={source.name}
          type_id={source.type_id}
          link={source.link}
        />
      );
    })
  };
};

const mapStateToProps = state => ({
  sourcesByType: state.products.sourcesByType
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSourcesByType
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Type);
