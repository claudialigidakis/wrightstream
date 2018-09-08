// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPurchaseHistory } from '../../state/actions/admin';

// CHART
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js';
ReactChartkick.addAdapter(Chart);

// ==========

class PurchaseHistory extends React.Component {
  transformData = () => {
    const a = Object.keys(this.props.purchaseHistory);
    return a.reduce((acc,ele) => {
      acc[ele] = this.props.purchaseHistory[ele].purchaseAmount;
      return acc;
    },{});
  };

  componentDidMount () {
    this.props.getPurchaseHistory();
  };

  render () {
    return (
      <div className="column">
        <div className="card">
          <header className="card-header">
            Purchase History
          </header>
          <div className="card-content">
            <div className="content">
              <LineChart data={this.transformData()} />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  purchaseHistory: state.admin.purchaseHistory
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPurchaseHistory
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseHistory);
