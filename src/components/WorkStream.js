// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPurchases, getStaff } from '../actions/workstream';
import { getItems, getCategories } from '../actions/products';

// COMPONENTS
import Purchase from './workstream/Purchase';

// ==========

class WorkStream extends React.Component {
  componentDidMount () {
    this.props.getPurchases();
    this.props.getStaff();
    this.props.getItems();
    this.props.getCategories();
  };

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
              {
                this.props.purchases.map(purchase => {
                  if (purchase.statuses.find(status => status.status_id === 1).completed === false) {
                    return (
                      <Purchase
                        key={purchase.id}
                        purchase={purchase}
                        staff={this.props.staff}
                      />
                    );
                  } else {
                    return null;
                  }
                })
              }
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
              {
                this.props.purchases.map(purchase => {
                  if (purchase.statuses.find(status => status.status_id === 1).completed === true && purchase.statuses.find(status => status.status_id === 2).completed === false) {
                    return (
                      <Purchase
                        key={purchase.id}
                        purchase={purchase}
                        staff={this.props.staff}
                      />
                    );
                  } else {
                    return null;
                  }
                })
              }
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
              {
                this.props.purchases.map(purchase => {
                  if (purchase.statuses.find(status => status.status_id === 2).completed === true && purchase.statuses.find(status => status.status_id === 3).completed === false) {
                    return (
                      <Purchase
                        key={purchase.id}
                        purchase={purchase}
                        staff={this.props.staff}
                      />
                    );
                  } else {
                    return null;
                  }
                })
              }
            </div>
          </div>
          <div className="column is-3">
            <h1 className="title is-4">
              Finalize
            </h1>
            <div className="column-container">
              {
                this.props.purchases.map(purchase => {
                  if (purchase.statuses.find(status => status.status_id === 3).completed === true && purchase.statuses.find(status => status.status_id === 4).completed === false) {
                    return (
                      <Purchase
                        key={purchase.id}
                        purchase={purchase}
                        staff={this.props.staff}
                      />
                    );
                  } else {
                    return null;
                  }
                })
              }
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
              {
                this.props.purchases.map(purchase => {
                  if (purchase.statuses.find(status => status.status_id === 4).completed === true && purchase.pick_up) {
                    return (
                      <Purchase
                        key={purchase.id}
                        purchase={purchase}
                        staff={this.props.staff}
                      />
                    );
                  } else {
                    return null;
                  }
                })
              }
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
              {
                this.props.purchases.map(purchase => {
                  if (purchase.statuses.find(status => status.status_id === 4).completed === true && purchase.pick_up === false) {
                    return (
                      <Purchase
                        key={purchase.id}
                        purchase={purchase}
                        staff={this.props.staff}
                      />
                    );
                  } else {
                    return null;
                  }
                })
              }
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
  purchases: state.workstream.purchases,
  staff: state.workstream.staff,
  items: state.products.items,
  categories: state.products.categories
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPurchases,
  getStaff,
  getItems,
  getCategories
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WorkStream);
