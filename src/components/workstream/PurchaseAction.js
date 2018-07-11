// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// HELPERS
const moment = require('moment');

// ==========

class PurchaseAction extends React.Component {
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

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, mapDispatchToProps)(PurchaseAction);
