// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLists } from '../../actions/inventory';

// COMPONENTS
import ListsList from './ListsList';
import ListsProduct from './ListsProduct';

// ==========

class Lists extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lists: [],
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

  handleSubmit = () => {

  };

  componentDidMount () {
    this.props.getLists();
  };

  render () {
    console.log(this.props.lists)
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
                  />
                );
              })
            }
          </ul>
        </div>
        <div className="column is-6">
          <div className="estimator-supplies">
            <h1 className="title is-5">Source here</h1>
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
  lists: state.inventory.lists
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLists
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
