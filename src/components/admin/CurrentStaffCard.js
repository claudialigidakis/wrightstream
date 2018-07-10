// REACT
import React from 'react';


class CurrentStaffCard extends React.Component {

  render () {
    return (
      <div id={this.props.id} className="column">
        <div className="card">
          <header>
            {this.props.first_name}
          </header>
          <div className="card-content">
              <ul>
              {
                this.props.inProduction.map(task => {
                return (
                <ul id={task.id}>Purchase #{task.id}</ul>
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
