// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getNewPurchases } from '../../actions/admin';

// ==========

class CurrentPurchases extends React.Component {
  componentDidMount () {
    this.props.getNewPurchases();
  };

  render () {
    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-content">
            <div className="content has-text-centered stat">
              <span className="lnr lnr-receipt"></span>
              <span className="stat-number">{this.props.newPurchases}</span>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              New Purchases
            </div>
          </footer>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  newPurchases: state.admin.newPurchases
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getNewPurchases
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPurchases);
