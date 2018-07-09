// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getTotalBundlesSoldChart } from '../../actions/admin';

//Charts
import ReactChartkick, { BarChart } from 'react-chartkick'
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart)


class TotalBundlesSoldChart extends React.Component {
  componentDidMount () {
    this.props.getTotalBundlesSoldChart();
  };

transformData = () => {
  const a = Object.keys(this.props.totalBundlesSoldChart)
  return a.reduce((acc,ele) => {
    acc[this.props.totalBundlesSoldChart[ele].name] = this.props.totalBundlesSoldChart[ele].neededSupplies
    return acc
  },{})
}


  render () {
    return (
      <div className="column">
        <div className="card">
          <header className="card-header">
            Total Bundles Sold
          </header>
          <div className="card-content">
            <div className="content">
              <BarChart data={this.transformData()} />

            </div>
          </div>
        </div>
      </div>
    )}
  }

  const mapStateToProps = state => ({
    totalBundlesSoldChart: state.admin.totalBundlesSoldChart
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getTotalBundlesSoldChart
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(TotalBundlesSoldChart);
