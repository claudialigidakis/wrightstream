// REACT
import React from 'react';

// ==========

class PurchaseItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: false
    };
  };

  check = () => {
    this.setState({checked: !this.state.checked});
  }

  render () {
    return (
      <li>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="field">
                {
                  !this.props.bundle ? <input className="is-checkradio" type="checkbox" checked={this.state.checked} /> : <span className="bullet">•</span>
                }
                <label onClick={this.check}>{this.props.item.item_qty} {this.props.item.name}</label> <span className="lnr-label" onClick={event => this.props.toggle(this.props.item, false)}></span>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="purchase-profile">
                {/* <img src={this.props.user.photo} alt='' /> */}
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
};

export default PurchaseItem;
