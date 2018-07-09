// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getTotalItemsSold } from '../../actions/admin';

class TotalItemsSold extends React.Component {
  componentDidMount () {
    this.props.getTotalItemsSold();
  };


  render () {
    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <span> {this.props.totalItemsSold} </span>
            </div>
          </div>
          <footer className="card-footer">
            Total Items Sold
          </footer>
        </div>
      </div>
    )}
  }

  const mapStateToProps = state => ({
    totalItemsSold: state.admin.totalItemsSold
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getTotalItemsSold
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(TotalItemsSold);
