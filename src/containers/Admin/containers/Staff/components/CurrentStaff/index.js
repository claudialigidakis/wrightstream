// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCurrentStaff } from '../../../../../../state/actions/admin';

// ==========

class CurrentStaff extends React.Component {
  componentDidMount () {
    this.props.getCurrentStaff();
  };

  render () {
    return (
      <div className="column">
        <div className="card">
          <div className="card-content">
            <div className="content has-text-centered stat">
              <span className="lnr lnr-group-work"></span>
              <span className="stat-number">{this.props.currentStaff}</span>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              Current Staff Working
            </div>
          </footer>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  currentStaff: state.admin.currentStaff
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCurrentStaff
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStaff);
