// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getTotalProductsSold } from '../../state/actions/admin';

// ==========

class TotalProductsSold extends React.Component {
  componentDidMount () {
    this.props.getTotalProductsSold();
  };

  render () {
    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-content">
            <div className="content has-text-centered">
              <span className="stat-number">{this.props.totalProductsSold}</span>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              Total Products Sold
            </div>
          </footer>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  totalProductsSold: state.admin.totalProductsSold
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTotalProductsSold
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TotalProductsSold);
