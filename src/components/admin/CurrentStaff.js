// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getCurrentStaff } from '../../actions/admin';

class CurrentStaff extends React.Component {
  componentDidMount () {
    this.props.getCurrentStaff();
  };


  render () {
    return (
      <div className="column">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <span> {this.props.currentStaff} </span>
            </div>
          </div>
          <footer className="card-footer">
            Current Staff Working
          </footer>
        </div>
      </div>
    )}
  }

  const mapStateToProps = state => ({
    currentStaff: state.admin.currentStaff
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getCurrentStaff
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(CurrentStaff);
