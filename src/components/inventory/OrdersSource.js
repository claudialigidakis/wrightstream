// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import OrdersSupply from './OrdersSupply';

// ==========

class OrdersSource extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

  render () {
    let supplies = [];
    const sourceSupplies = this.props.supplies.filter(supply => supply.source_id === this.props.source.id);
    for (let supply of this.props.orderSupplies) {
      if (sourceSupplies.find(sourceSupply => sourceSupply.id === supply.supply_id)) {
        supplies = [...supplies, supply];
      }
    }

    return (
      <div>
        <h1 className="title is-5">
          {
            supplies.length > 0 ? this.props.source.name : null
          }
        </h1>
        <ul>
          {
            supplies.map(supply => {
              return (
                <OrdersSupply
                  key={supply.supply_id}
                  supply={supply}
                  supplies={this.props.supplies}
                  editSupply={this.props.editSupply}
                />
              );
            })
          }
        </ul>
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrdersSource);
