// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getTotalStaff } from '../../actions/admin';

class TotalStaff extends React.Component {
  componentDidMount () {
    this.props.getTotalStaff();
  };


  render () {
    return (
      <div className="column">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <span> {this.props.totalStaff} </span>
            </div>
          </div>
          <footer className="card-footer">
            Total Staff
          </footer>
        </div>
      </div>
    )}
  }

  const mapStateToProps = state => ({
    totalStaff: state.admin.totalStaff
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getTotalStaff
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(TotalStaff);
