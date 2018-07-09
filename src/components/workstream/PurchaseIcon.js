// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// HELPERS
const moment = require('moment');

// ==========

class PurchaseIcon extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

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

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, mapDispatchToProps)(PurchaseIcon);
