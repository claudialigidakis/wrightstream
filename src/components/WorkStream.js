// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPurchases } from '../actions/workstream';
import { getItems, getCategories } from '../actions/products';

// COMPONENTS
import Purchase from './workstream/Purchase';
import Purchase1 from './workstream/Purchase1';
import Purchase2 from './workstream/Purchase2';
import Purchase3 from './workstream/Purchase3';
import Purchase4 from './workstream/Purchase4';
import Purchase5 from './workstream/Purchase5';
import Purchase6 from './workstream/Purchase6';
import Purchase7 from './workstream/Purchase7';
import Purchase8 from './workstream/Purchase8';
import Purchase9 from './workstream/Purchase9';
import Purchase10 from './workstream/Purchase10';
import Purchase11 from './workstream/Purchase11';
import Purchase12 from './workstream/Purchase12';
import Purchase13 from './workstream/Purchase13';

// ==========

class WorkStream extends React.Component {
  componentDidMount () {
    this.props.getPurchases();
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
                        id={purchase.id}
                      />
                    );
                  }
                })
              }
              <Purchase1 item={this.props.items[0]} categories={this.props.categories} />
              <Purchase2 item={this.props.items[1]} categories={this.props.categories} />
              <Purchase3 item={this.props.items[2]} categories={this.props.categories} />
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
                        id={purchase.id}
                      />
                    );
                  }
                })
              }
              <Purchase4 item={this.props.items[3]} categories={this.props.categories} />
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
                        id={purchase.id}
                      />
                    );
                  }
                })
              }
              <Purchase6 item={this.props.items[5]} categories={this.props.categories} />
              <Purchase5 item={this.props.items[4]} categories={this.props.categories} />
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
                        id={purchase.id}
                      />
                    );
                  }
                })
              }
              <Purchase7 item={this.props.items[6]} categories={this.props.categories} />
              <Purchase8 item={this.props.items[7]} categories={this.props.categories} />
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
                  if (purchase.statuses.find(status => status.status_id === 4).completed === true) {
                    return (
                      <Purchase
                        key={purchase.id}
                        id={purchase.id}
                      />
                    );
                  }
                })
              }
              <Purchase10 item={this.props.items[11]} categories={this.props.categories} />
              <Purchase9 item={this.props.items[10]} categories={this.props.categories} />
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
                  if (purchase.statuses.find(status => status.status_id === 4).completed === true) {
                    return (
                      <Purchase
                        key={purchase.id}
                        id={purchase.id}
                      />
                    );
                  }
                })
              }
              <Purchase11 item={this.props.items[12]} categories={this.props.categories} />
              <Purchase12 item={this.props.items[13]} categories={this.props.categories} />
              <Purchase13 item={this.props.items[16]} categories={this.props.categories} />
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
  items: state.products.items,
  categories: state.products.categories
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPurchases,
  getItems,
  getCategories
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WorkStream);
