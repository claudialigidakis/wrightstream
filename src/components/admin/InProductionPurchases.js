// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getInProductionPurchases } from '../../actions/admin';

class InProductionPurchases extends React.Component {
  componentDidMount () {
    this.props.getInProductionPurchases();
  };


  render () {
    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <span> {this.props.InProductionPurchases} </span>
            </div>
          </div>
          <footer className="card-footer">
            In Production Purchases
          </footer>
        </div>
      </div>
    )}
  }

  const mapStateToProps = state => ({
    InProductionPurchases: state.admin.InProductionPurchases
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getInProductionPurchases
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(InProductionPurchases);
