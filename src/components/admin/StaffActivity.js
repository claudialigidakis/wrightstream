// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getCurrentStaffActivity } from '../../state/actions/admin';
import CurrentStaffCard from './CurrentStaffCard';



class StaffActivity extends React.Component {
  componentDidMount () {
    this.props.getCurrentStaffActivity();
  };

  render () {
    return (
      <div className="column">
        <h1 className="title is-5 has-text-centered">Current Staff Activity</h1>
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
