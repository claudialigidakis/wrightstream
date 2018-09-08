// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTotalStaff } from '../../../../../../state/actions/admin';

// ==========

class TotalStaff extends React.Component {
  componentDidMount () {
    this.props.getTotalStaff();
  };

  render () {
    return (
      <div className="column">
        <div className="card">
          <div className="card-content">
            <div className="content has-text-centered stat">
              <span className="lnr lnr-contacts"></span>
              <span className="stat-number">{this.props.totalStaff}</span>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              Total Staff
            </div>
          </footer>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  totalStaff: state.admin.totalStaff
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTotalStaff
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TotalStaff);
