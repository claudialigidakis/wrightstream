// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getCurrentStaffActivity } from '../../actions/admin';
import CurrentStaffCard from './CurrentStaffCard';



class StaffActivity extends React.Component {
  componentDidMount () {
    this.props.getCurrentStaffActivity();
  };



  render () {
    return (
      <div className="column">
        Current Staff Activity
        {this.props.currentStaffActivity.map(activity => {
          return (
          <CurrentStaffCard
            key={activity.id}
            id={activity.id}
            first_name={activity.first_name}
            photo={activity.photo}
            inProduction={activity.inProduction}
          /> )
        })
        }
      </div>
    )}
  }


  const mapStateToProps = state => ({
    currentStaffActivity: state.admin.currentStaffActivity
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getCurrentStaffActivity
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(StaffActivity);
