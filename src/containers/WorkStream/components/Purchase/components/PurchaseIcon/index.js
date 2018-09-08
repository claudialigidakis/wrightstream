// REACT
import React from 'react';

// HELPERS
const moment = require('moment');

// ==========

class PurchaseIcon extends React.Component {
  render () {
    return (
      <div>
        {
          (() => {
            if (this.props.purchase.statuses.find(status => status.status_id === 4).completed === true) {
              const today = new Date();
              if (moment(this.props.purchase.delivery_date).isBefore(today)) {
                return <span className="lnr-calendar-check"></span>;
              } else {
                return <span className="lnr-calendar-empty"></span>;
              }
            } else {
              return <span className="lnr-line-spacing"></span>;
            }
          })()
        }
      </div>
    );
  };
};

export default PurchaseIcon;
