// REACT
import React from 'react';

// ==========

class PurchaseStore extends React.Component {
  render () {
    return (
      <div>
        {
          this.props.purchase.store_id === 1 ? (
            <img className="store-logo-img" src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Etsy-icon.png" alt="Etsy" />
          ) : (
            <div className="store-logo">
              C
            </div>
          )
        }
      </div>
    );
  };
};

export default PurchaseStore;
