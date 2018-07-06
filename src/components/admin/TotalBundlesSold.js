// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getTotalBundlesSold } from '../../actions/admin';

class TotalBundlesSold extends React.Component {
  componentDidMount () {
    this.props.getTotalBundlesSold();
  };


  render () {
    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <span> {this.props.totalBundlesSold} </span>
            </div>
          </div>
          <footer className="card-footer">
            Total Bundles Sold
          </footer>
        </div>
      </div>
    )}
  }

  const mapStateToProps = state => ({
    totalBundlesSold: state.admin.totalBundlesSold
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getTotalBundlesSold
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(TotalBundlesSold);
