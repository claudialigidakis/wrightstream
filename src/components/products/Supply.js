// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSources } from '../../actions/products';

// ==========

class Supply extends React.Component {
  componentDidMount () {
    this.props.getSources();
  };
  
  render () {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>
          {
            this.props.kinds.find(kind => kind.id === this.props.kind_id) ?
            (
              this.props.kinds.find(kind => kind.id === this.props.kind_id).name
            ) : null
          }
        </td>
        <td>
          {
            this.props.sources.find(source => source.id === this.props.source_id) ?
            (
              this.props.sources.find(source => source.id === this.props.source_id).name
            ) : null
          }
        </td>
      </tr>
    );
  };
};

const mapStateToProps = state => ({
  kinds: state.products.kinds,
  sources: state.products.sources
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSources
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Supply);
