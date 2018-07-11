// REACT
import React from 'react';

// HELPERS
const moment = require('moment');

// ==========

class PurchaseAction extends React.Component {
  render () {
    return (
      <div>
        {
          (() => {
            if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
              if ((this.props.purchase.supplies.filter(supply => supply.completed).length / this.props.purchase.supplies.length) * 100 === 100) {
                return (
                  <footer className="card-footer" onClick={() => this.changeStatus(1, true)}>
                    Move to Pending
                  </footer>
                );
              }
            } else if (this.props.purchase.statuses.find(status => status.status_id === 4).completed === true) {
              const today = new Date();
              if (moment(this.props.purchase.delivery_date).isBefore(today)) {
                return (
                  <footer className="card-footer">
                    Archive
                  </footer>
                );
              }
            } else {
              return null;
            }
          })()
        }
      </div>
    );
  };
};

export default PurchaseAction;
