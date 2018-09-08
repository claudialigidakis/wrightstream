// REACT
import React from 'react';

// COMPONENTS
import OrdersSupply from './components/OrdersSupply';

// ==========

class OrdersSource extends React.Component {
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
        {
          supplies.length > 0 ? (
            <ul style={{padding: '.1rem 0 2rem'}}>
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
          ) : null
        }
      </div>
    );
  };
};

export default OrdersSource;
