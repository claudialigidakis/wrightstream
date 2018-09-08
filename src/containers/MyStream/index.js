// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPurchases, getStaff } from '../../state/actions/workstream';
import { getItems, getCategories } from '../../state/actions/products';

// COMPONENTS
import Purchase from '../WorkStream/components/Purchase';

// ==========

class MyStream extends React.Component {
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
          <div className="column is-4 is-offset-2">
            <h1 className="title is-3 has-text-centered">
              Crafting
            </h1>
            <div className="column-container">
              {
                this.props.purchases.map(purchase => {
                  if (
                    purchase.statuses.find(status => status.status_id === 2).completed === true
                    && purchase.statuses.find(status => status.status_id === 3).completed === false
                    && purchase.staff_id === this.props.user.id
                  ) {
                    return (
                      <Purchase
                        key={purchase.id}
                        purchase={purchase}
                        staff={this.props.staff}
                        mystream={true}
                      />
                    );
                  } else {
                    return null;
                  }
                })
              }
            </div>
          </div>
          <div className="column is-4">
            <h1 className="title is-3 has-text-centered">
              Finalize
            </h1>
            <div className="column-container">
              {
                this.props.purchases.map(purchase => {
                  if (
                    purchase.statuses.find(status => status.status_id === 3).completed === true
                    && purchase.statuses.find(status => status.status_id === 4).completed === false
                    && purchase.staff_id === this.props.user.id
                  ) {
                    return (
                      <Purchase
                        key={purchase.id}
                        purchase={purchase}
                        staff={this.props.staff}
                        mystream={true}
                      />
                    );
                  } else {
                    return null;
                  }
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user,
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

export default connect(mapStateToProps, mapDispatchToProps)(MyStream);
