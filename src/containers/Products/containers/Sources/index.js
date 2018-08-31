// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSources } from '../../state/actions/products';

// COMPONENTS
import Source from './Source';

// ==========

class Sources extends React.Component {
  componentDidMount () {
    this.props.getSources();
  };

  render () {
    return (
      <table className="table is-striped is-hoverable is-fullwidth products-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.sources.map(source => {
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
          }
        </tbody>
      </table>
    );
  };
};

const mapStateToProps = state => ({
  sources: state.products.sources
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSources
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
