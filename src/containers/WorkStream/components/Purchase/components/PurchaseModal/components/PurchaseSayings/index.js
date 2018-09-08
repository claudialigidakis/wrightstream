// REACT
import React from 'react';

// ==========

class PurchaseSayings extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

  render () {
    return (
      <div className="purchase-sayings">
        {
          (() => {
            if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
              return (
                <div>
                  <span className="lnr lnr-receipt"></span>
                  <span className="saying">Another order on its way!</span>
                </div>
              );
            } else if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
              return (
                <div>
                  <span className="lnr lnr-list2"></span>
                  <span className="saying">Line ‘em up!</span>
                </div>
              );
            } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
              return (
                <div>
                  <span className="lnr lnr-hammer"></span>
                  <span className="saying">Put together, part and parcel.</span>
                </div>
              );
            } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
              return (
                <div>
                  <span className="lnr lnr-gift"></span>
                  <span className="saying">It's a wrap!</span>
                </div>
              );
            } else if (this.props.purchase.statuses.find(status => status.status_id === 4).completed === true) {
              return (
                <div>
                  <span className="lnr lnr-mailbox-full"></span>
                  <span className="saying">Hey, Mr. Postman!</span>
                </div>
              );
            }
          })()
        }
      </div>
    );
  };
};

export default PurchaseSayings;
