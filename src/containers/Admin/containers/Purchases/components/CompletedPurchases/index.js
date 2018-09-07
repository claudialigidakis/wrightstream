// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getCompletedPurchases } from '../../state/actions/admin';

// ==========

class CompletedPurchases extends React.Component {
  componentDidMount () {
    this.props.getCompletedPurchases();
  };

  render () {
    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-content">
            <div className="content has-text-centered stat">
              <span className="lnr lnr-bag"></span>
              <span className="stat-number">{this.props.completedPurchases}</span>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              Completed Purchases
            </div>
          </footer>
        </div>
      </div>
    )
  };
};

const mapStateToProps = state => ({
  completedPurchases: state.admin.completedPurchases
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCompletedPurchases
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CompletedPurchases);
