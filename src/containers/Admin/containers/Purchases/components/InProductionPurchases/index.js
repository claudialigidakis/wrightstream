// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getInProductionPurchases } from '../../state/actions/admin';

// ==========

class InProductionPurchases extends React.Component {
  componentDidMount () {
    this.props.getInProductionPurchases();
  };

  render () {
    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-content">
            <div className="content has-text-centered stat">
              <span className="lnr lnr-hammer-wrench"></span>
              <span className="stat-number">{this.props.InProductionPurchases}</span>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              In Production Purchases
            </div>
          </footer>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  InProductionPurchases: state.admin.InProductionPurchases
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getInProductionPurchases
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InProductionPurchases);
