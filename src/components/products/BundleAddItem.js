// REACT
import React from 'react';

// ==========

class BundleAddItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: 'default',
      qty: 0
    };
  };

  clear = () => {
    this.setState({
      id: 'default',
      qty: 0
    });
  };

  render () {
    const remainingItems = this.props.items.filter(item =>
      !this.props.selected.find(selectedItem => selectedItem.id === item.id)
    );
    let itemsList = remainingItems;
    if (this.state.id !== 'default') {
      const currentItem = this.props.items.find(item => item.id === this.state.id);
      itemsList = [currentItem, ...remainingItems];
    }

    return (
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field" style={{ width: '72%' }}>
            <div className="control">
              <div className="select">
                <select
                  id="id"
                  value={this.state.id}
                  onChange={event => {
                    this.setState({id: parseInt(event.target.value, 10)});
                    this.props.addItem(this.props.input, parseInt(event.target.value, 10));
                  }}
                >
                  <option value="default" disabled>Item</option>
                  {
                    itemsList.map(item => {
                      return (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
          </div>
          <div className="field" style={{ width: '20%' }}>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Quantity"
                id="qty"
                value={this.state.qty}
                onChange={event => {
                  this.setState({qty: parseInt(event.target.value, 10)});
                  this.props.addItemQty(this.props.input, parseInt(event.target.value, 10));
                }}
              />
            </div>
          </div>
          <div className="control" style={{ width: '8%' }}>
            {
              this.props.i === this.props.length ? (
                <button
                  style={{ width: '100%' }}
                  type="button"
                  className="button is-success is-outlined"
                  onClick={() => this.props.appendInput()}
                >+</button>
              ) : (
                <button
                  style={{ width: '100%' }}
                  type="button"
                  className="button is-danger is-outlined"
                  onClick={() => {
                    this.props.deleteItem(this.props.input);
                    this.props.deleteInput(this.props.i)
                  }}
                >-</button>
              )
            }
          </div>
        </div>
      </div>
    );
  };
};

export default BundleAddItem;
