// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCompletedStaff } from '../../../../../../state/actions/admin';

// CHART
import ReactChartkick, { ColumnChart } from 'react-chartkick';
import Chart from 'chart.js';
ReactChartkick.addAdapter(Chart);

// ==========

class StaffCompleted extends React.Component {
  transformData = () => {
    const a = Object.keys(this.props.completedStaff);
    return a.reduce((acc,ele) => {
      acc[this.props.completedStaff[ele].first_name] = this.props.completedStaff[ele].completed.length;
      return acc;
    },{});
  };

  componentDidMount () {
    this.props.getCompletedStaff();
  };

  render () {
    return (
      <div className="column">
        <div className="card">
          <header className="card-header">
            Completed Staff Activity
          </header>
          <div className="card-content">
            <div className="content">
              <ColumnChart data={this.transformData()} stacked={true} />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  completedStaff: state.admin.completedStaff
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCompletedStaff
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StaffCompleted);
