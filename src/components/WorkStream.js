// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import Purchase from './workstream/Purchase';

// ==========

class WorkStream extends React.Component {
  render () {
    return (
      <section className="workstream">
        <div className="columns is-marginless">
          <div className="column is-3">
            <h1 className="title is-4">
              Backlog
              <a><span className="lnr-refresh"></span></a>
              <a><span className="lnr-plus"></span></a>
            </h1>
            <div className="column-container">
              <Purchase />
            </div>
            <div className="column-button">
              Move to Pending
            </div>
          </div>
          <div className="column is-3">
            <h1 className="title is-4">
              Pending
            </h1>
            <div className="column-container">
              <Purchase />
            </div>
            <div className="column-button">
              Assign
            </div>
          </div>
          <div className="column is-3">
            <h1 className="title is-4">
              Crafting
            </h1>
            <div className="column-container">
              <Purchase />
            </div>
          </div>
          <div className="column is-3">
            <h1 className="title is-4">
              Finalize
            </h1>
            <div className="column-container">
              <Purchase />
            </div>
            <div className="column-button">
              Assign
            </div>
          </div>
          <div className="column is-3">
            <h1 className="title is-4">
              Pick Up
            </h1>
            <div className="column-container">
              <Purchase />
            </div>
            <div className="column-button">
              Archive
            </div>
          </div>
          <div className="column is-3">
            <h1 className="title is-4">
              Ship
            </h1>
            <div className="column-container">
              <Purchase />
            </div>
            <div className="column-button">
              Archive
            </div>
          </div>
        </div>
      </section>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WorkStream);
