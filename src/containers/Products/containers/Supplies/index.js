// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSupplies } from '../../state/actions/products';

// COMPONENTS
import Supply from './Supply';

// ==========

class Supplies extends React.Component {
  componentDidMount () {
    this.props.getSupplies();
  };

  render () {
    return (
      <table className="table is-striped is-hoverable is-fullwidth products-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Kind</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.supplies.map(supply => {
              return (
                <Supply
                  key={supply.id}
                  id={supply.id}
                  name={supply.name}
                  kind_id={supply.kind_id}
                  source_id={supply.source_id}
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
  supplies: state.products.supplies
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSupplies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Supplies);
