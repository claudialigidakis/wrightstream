// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLists } from '../../actions/inventory';
import { getSources } from '../../actions/products';

// COMPONENTS
import ListsList from './ListsList';
import ListsProduct from './ListsProduct';
import ListsSource from './ListsSource';

// ==========

class Lists extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lists: [],
      selected: [],
      id: null,
      modal: false,
      modalClasses: 'modal'
    };
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

  addSelected = list => {
    if (!this.state.selected.find(checkedList => checkedList.id === list.id)) {
      this.setState({selected: [...this.state.selected, list]});
    } else {
      const [list, ...rest] = this.state.selected;
      this.setState({selected: rest});
    }

  }

  handleSubmit = () => {

  };

  componentDidMount () {
    this.props.getLists();
    this.props.getSources();
  };

  render () {
    console.log('lists', this.props.lists)
        console.log('selected', this.state.selected);
    return (
      <div className="columns estimator-content">
        <div className="column is-6">
          <h1 className="title is-5">Lists</h1>
          <ul>
            {
              this.props.lists.map(list => {
                return (
                  <ListsList
                    key={list.id}
                    list={list}
                    toggle={this.toggle}
                    addSelected={this.addSelected}
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
                  />
                );
              })
            }

            <div className="has-text-right">
              <button className="button is-outlined is-primary" onClick={this.handleSubmit}>Order</button>
            </div>
          </div>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content">
            <div className="modal-container">
              <h1 className="title is-5">Products in {
                this.state.id ? this.props.lists.find(list => list.id === this.state.id).name : null
              }</h1>
              <ul>
                {
                  this.state.id ?
                  this.props.lists.find(list => list.id === this.state.id).item.map(item => {
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
  sources: state.products.sources
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLists,
  getSources
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
