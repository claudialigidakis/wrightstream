// REACT
import React from 'react';

// ==========

class CurrentStaffCard extends React.Component {
  render () {
    return (
      <div id={this.props.id} className="column">
        <div className="card">
          <div className="columns is-marginless staff-container">
            <div className="column is-4 staff-user">
              <img src={this.props.photo} alt={this.props.first_name} /><br />
              {this.props.first_name}
            </div>
            <div className="column is-8 staff-purchases">
              <ul>
                {
                  this.props.inProduction.map(task => {
                    return (
                      <li key={task.id} id={task.id}>Purchase #{task.id}</li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default CurrentStaffCard;
