// REACT
import React from 'react';


class CurrentStaffCard extends React.Component {

  render () {
    return (
      <div id={this.props.id} className="column is-4">
        <div className="card">
          <header>
            {this.props.first_name}
          </header>
          <div className="card-content">
              <ul>
              {
                this.props.inProduction.map(task => {
                  console.log("task",task);
                return (
                <ul id={task.id}>{task.id}</ul>
                  )
              })
            }
            </ul>
          </div>
        </div>
      </div>
    );
  };
};


export default CurrentStaffCard;
