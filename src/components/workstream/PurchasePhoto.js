// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class PurchasePhoto extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

  render () {
    return (
      <div>
        {/* {
          (() => {
            if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
              return <div className="empty-photo" onClick={() => this.props.changeStatus(2, true)}></div>;
            } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
              return <img src={this.props.user.photo} alt='' onClick={() => this.props.changeStatus(2, false)} />;
            } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
              return <div className="empty-photo"></div>;
            } else {
              return null;
            }
          })()
        } */}
        {
          (() => {
            if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
              return <div className="empty-photo" onClick={this.props.assign}></div>;
            } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
              return <img src={this.props.user.photo} alt='' onClick={this.props.assign} />;
            } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
              return <div className="empty-photo"></div>;
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

export default connect(null, mapDispatchToProps)(PurchasePhoto);
