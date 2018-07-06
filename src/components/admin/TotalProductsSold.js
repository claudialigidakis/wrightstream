// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getTotalProductsSold } from '../../actions/admin';

class TotalProductsSold extends React.Component {
  componentDidMount () {
    this.props.getTotalProductsSold();
  };


  render () {
    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <span> {this.props.totalProductsSold} </span>
            </div>
          </div>
          <footer className="card-footer">
            Total Products Sold
          </footer>
        </div>
      </div>
    )}
  }

  const mapStateToProps = state => ({
    totalProductsSold: state.admin.totalProductsSold
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getTotalProductsSold
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(TotalProductsSold);
