// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLists, getWorkstreamList, addOrder } from '../../../../state/actions/inventory';
import { getSources, getSupplies } from '../../../../state/actions/products';
import { estimator } from '../../../../state/actions/helper';

// COMPONENTS
import ListsList from './components/ListsList';
import ListsProduct from './components/ListsProduct';
import ListsSource from './components/ListsSource';

// ==========

class Lists extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: [],
      items: [],
      bundles: [],
      id: null,
      modal: false,
      modalClasses: 'modal'
    };
  };

  clear = () => {
    this.setState({
      selected: [],
      items: [],
      bundles: [],
      id: null,
      modal: false,
      modalClasses: 'modal'
    });
  };

  toggle = id => {
    if (!this.state.modal) {
      this.setState({
        id,
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active'
      });
    } else {
      this.setState({
        id: null,
        modal: false,
        modalClasses: 'modal'
      });
    }
  };

  select = list => {
    if (!this.state.selected.find(checkedList => checkedList.id === list.id)) {
      this.setState({selected: [...this.state.selected, list]}, () => {
        this.addItems(list);
        this.addBundles(list);
      });
    } else {
      const index = this.state.selected.findIndex(checkedList => checkedList.id === list.id);
      this.setState({selected: [...this.state.selected.slice(0, index), ...this.state.selected.slice(index+1, this.state.selected.length)]}, () => {
        this.removeItems(list);
        this.removeBundles(list);
      });
    }
  };

  addItems = list => {
    let items = [...this.state.items];
    for (let item of list.item) {
      if (!items.find(existingItem => existingItem.item_id === item.item_id)) {
        items = [...items, item];
      } else {
        items = items.map(existingItem => existingItem.item_id === item.item_id ? {...existingItem, item_qty: existingItem.item_qty + item.item_qty} : {...existingItem});
      }
    }
    this.setState({items: items}, this.estimate);
  };

  addBundles = list => {
    let bundles = [...this.state.bundles];
    for (let bundle of list.bundles) {
      if (!bundles.find(existingBundle => existingBundle.bundle_id === bundle.bundle_id)) {
        bundles = [...bundles, bundle];
      } else {
        bundles = bundles.map(existingBundle => existingBundle.bundle_id === bundle.bundle_id ? {...existingBundle, bundle_qty: existingBundle.bundle_qty + bundle.bundle_qty} : {...existingBundle});
      }
    }
    this.setState({bundles: bundles}, this.estimate);
  };

  removeItems = list => {
    let items = [...this.state.items];
    for (let item of list.item) {
      items = items.map(existingItem => existingItem.item_id === item.item_id ? {...existingItem, item_qty: existingItem.item_qty - item.item_qty} : {...existingItem});
    }
    this.setState({items: items.filter(item => item.item_qty !== 0)}, this.estimate);
  };

  removeBundles = list => {
    let bundles = [...this.state.bundles];
    for (let bundle of list.bundles) {
      bundles = bundles.map(existingBundle => existingBundle.bundle_id === bundle.bundle_id ? {...existingBundle, bundle_qty: existingBundle.bundle_qty - bundle.bundle_qty} : {...existingBundle});
    }
    this.setState({bundles: bundles.filter(bundle => bundle.bundle_qty !== 0)}, this.estimate);
  };

  estimate = () => {
    this.props.estimator(this.state.items.map(item => ({id: item.item_id, item_qty: item.item_qty})), this.state.bundles.map(bundle => ({id: bundle.bundle_id, bundle_qty: bundle.bundle_qty})));
  };

  handleSubmit = () => {
    const items = this.state.items.map(item => ({id: item.item_id, item_qty: item.item_qty}));
    const bundles = this.state.bundles.map(bundle => ({id: bundle.bundle_id, bundle_qty: bundle.bundle_qty}));
    this.props.addOrder({items, bundles});
    this.setState({
      selected: [],
      items: [],
      bundles: []
    }, this.estimate);
  };

  componentDidMount () {
    this.props.getLists();
    this.props.getWorkstreamList();
    this.props.getSources();
    this.props.getSupplies();
    this.props.estimator([],[]);
  };

  render () {
    let workstreamItems = [];
    for (let purchase of this.props.workstreamList) {
      for (let purchaseItem of purchase.items) {
        if (workstreamItems.find(item => item.item_id === purchaseItem.item_id)) {
          workstreamItems.find(item => item.item_id === purchaseItem.item_id).item_qty += purchaseItem.item_qty;
        } else {
          workstreamItems = [...workstreamItems, purchaseItem];
        }
      }
    }
    const workstreamList = {id: 0, name: "WorkStream", item: workstreamItems, bundles: []};
    const lists = [workstreamList, ...this.props.lists];

    return (
      <div className="columns estimator-content">
        <div className="column is-6">
          <h1 className="title is-5">Lists</h1>
          <ul className="inventory-list">
            {
              lists.map(list => {
                return (
                  <ListsList
                    key={list.id}
                    list={list}
                    toggle={this.toggle}
                    select={this.select}
                  />
                );
              })
            }
          </ul>
        </div>
        <div className="column is-6">
          <div className={this.props.estimatorSupplies.length > 0 ? 'estimator-supplies' : 'estimator-supplies hide'}>
            {
              this.props.sources.map(source => {
                return (
                  <ListsSource
                    key={source.id}
                    source={source}
                    supplies={this.props.supplies}
                    estimatorSupplies={this.props.estimatorSupplies}
                  />
                );
              })
            }
            <br />
            <div className="has-text-right">
              <button
                className="button is-outlined is-primary"
                disabled={this.props.estimatorSupplies.length > 0 ? false : true}
                onClick={this.handleSubmit}
              >Order</button>
            </div>
          </div>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content">
            <div className="modal-container">
              <h1 className="title is-5">
                Products in {this.state.id ? lists.find(list => list.id === this.state.id).name : null}
              </h1>
              <ul>
                {
                  this.state.id ?
                  lists.find(list => list.id === this.state.id).item.map(item => {
                    return (
                      <ListsProduct
                        key={item.item_id}
                        item={item}
                      />
                    );
                  }) : null
                }
              </ul>
            </div>
          </div>
          <button className="modal-close is-large" onClick={this.toggle}></button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  lists: state.inventory.lists,
  workstreamList: state.inventory.workstreamList,
  sources: state.products.sources,
  supplies: state.products.supplies,
  estimatorSupplies: state.helper.supplies
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLists,
  getWorkstreamList,
  addOrder,
  getSources,
  getSupplies,
  estimator
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
