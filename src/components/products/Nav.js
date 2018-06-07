// REACT
import React from 'react';

// ==========

class Nav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productsClasses: 'is-active',
      suppliesClasses: '',
      sourcesClasses: ''
    };
  };

  componentDidMount () {
    if (window.location.pathname.includes('/products/supplies')) {
      this.setState({
        productsClasses: '',
        suppliesClasses: 'is-active',
        sourcesClasses: ''
      });
    } else if (window.location.pathname.includes('/products/sources')) {
      this.setState({
        productsClasses: '',
        suppliesClasses: '',
        sourcesClasses: 'is-active'
      });
    } else {
      this.setState({
        productsClasses: 'is-active',
        suppliesClasses: '',
        sourcesClasses: ''
      });
    }
  };

  render () {
    return (
      <div className="tabs is-centered is-large products-tabs">
        <ul>
          <li className={this.state.productsClasses}><a href="/products">Products</a></li>
          <li className={this.state.suppliesClasses}><a href="/products/supplies">Supplies</a></li>
          <li className={this.state.sourcesClasses}><a href="/products/sources">Sources</a></li>
        </ul>
      </div>
    );
  };
};

export default Nav;
