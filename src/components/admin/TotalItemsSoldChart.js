// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getTotalItemsSoldChart } from '../../state/actions/admin';

//Charts
import ReactChartkick, { BarChart } from 'react-chartkick'
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart)


class TotalItemsSoldChart extends React.Component {
  componentDidMount () {
    this.props.getTotalItemsSoldChart();
  };

transformData = () => {
  const a = Object.keys(this.props.totalItemsSoldChart)
  return a.reduce((acc,ele) => {
    acc[this.props.totalItemsSoldChart[ele].name] = this.props.totalItemsSoldChart[ele].neededSupplies
    return acc
  },{})
}


  render () {
    return (
      <div className="column">
        <div className="card">
          <header className="card-header">
            Total Items Sold Chart
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
    totalItemsSoldChart: state.admin.totalItemsSoldChart
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getTotalItemsSoldChart
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(TotalItemsSoldChart);
