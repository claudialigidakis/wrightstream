// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getCompletedStaff } from '../../actions/admin';

//Charts
import ReactChartkick, { ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart)


class StaffCompleted extends React.Component {
  componentDidMount () {
    this.props.getCompletedStaff();
  };

  transformData = () => {
    const a = Object.keys(this.props.completedStaff)
    return a.reduce((acc,ele) => {
      acc[this.props.completedStaff[ele].first_name] = this.props.completedStaff[ele].completed.length
      return acc
    },{})
  }


  render () {
    return (
      <div className="column">
        Completed Staff Activity
        <ColumnChart data={this.transformData()} stacked={true} />
      </div>
    )}
  }


  const mapStateToProps = state => ({
    completedStaff: state.admin.completedStaff
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getCompletedStaff
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(StaffCompleted);
