// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLists, getWorkstreamList, addOrder } from '../../actions/inventory';
import { getSources, getSupplies } from '../../actions/products';
import { estimator } from '../../actions/helper';

// COMPONENTS
import ListsList from './ListsList';
import ListsProduct from './ListsProduct';
import ListsSource from './ListsSource';

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
      this.setState({selected: [...this.state.selected, list]}, this.addItems(list));
    } else {
      const index = this.state.selected.findIndex(checkedList => checkedList.id === list.id);
      this.setState({selected: [...this.state.selected.slice(0, index), ...this.state.selected.slice(index+1, this.state.selected.length)]}, this.removeItems(list));
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

  removeItems = list => {
    let items = [...this.state.items];
    for (let item of list.item) {
      items = items.map(existingItem => existingItem.item_id === item.item_id ? {...existingItem, item_qty: existingItem.item_qty - item.item_qty} : {...existingItem});
    }
    this.setState({items: items.filter(item => item.item_qty !== 0)}, this.estimate);
  };

  estimate = () => {
    this.props.estimator(this.state.items.map(item => ({id: item.item_id, item_qty: item.item_qty})), this.state.bundles);
  };

  handleSubmit = () => {
    const items = this.state.items.map(item => ({id: item.item_id, item_qty: item.item_qty}));
    this.props.addOrder({items, bundles: this.state.bundles});
    this.clear();
  };

  componentDidMount () {
    this.props.getLists();
    this.props.getWorkstreamList();
    this.props.getSources();
    this.props.getSupplies();
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
          <ul>
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
          <div className="estimator-supplies">
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
            <div className="has-text-right">
              <button
                className="button is-outlined is-primary"
                disabled={
                  this.props.estimatorSupplies.length > 0 ? false : true
                }
                onClick={this.handleSubmit}
              >Order</button>
            </div>
          </div>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content">
            <div className="modal-container">
              <h1 className="title is-5">Products in {
                this.state.id ? lists.find(list => list.id === this.state.id).name : null
              }</h1>
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
          <button className="modal-close is-large"  onClick={this.toggle}></button>
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
