// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getTotalItemsSold } from '../../state/actions/admin';

// ==========

class TotalItemsSold extends React.Component {
  componentDidMount () {
    this.props.getTotalItemsSold();
  };

  render () {
    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-content">
            <div className="content has-text-centered">
              <span className="stat-number">{this.props.totalItemsSold}</span>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              Total Items Sold
            </div>
          </footer>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  totalItemsSold: state.admin.totalItemsSold
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTotalItemsSold
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TotalItemsSold);
