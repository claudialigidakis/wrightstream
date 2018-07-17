// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getTotalBundlesSold } from '../../actions/admin';

// ==========

class TotalBundlesSold extends React.Component {
  componentDidMount () {
    this.props.getTotalBundlesSold();
  };

  render () {
    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-content">
            <div className="content has-text-centered">
              <span className="stat-number">{this.props.totalBundlesSold}</span>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              Total Bundles Sold
            </div>
          </footer>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  totalBundlesSold: state.admin.totalBundlesSold
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTotalBundlesSold
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TotalBundlesSold);
