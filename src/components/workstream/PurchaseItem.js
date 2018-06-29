// REACT
import React from 'react';

// ==========

class PurchaseItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

  render () {
    return (
      <li>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="field">
                <input className="is-checkradio" id="cupcakes" type="checkbox" name="cupcakes" />
                <label htmlFor="cupcakes">5 Chocolate Cupcakes</label>
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
