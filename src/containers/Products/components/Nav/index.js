// REACT
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom'

// ==========

class Nav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productsClasses: '',
      suppliesClasses: '',
      sourcesClasses: ''
    };
  };

  toggle = link => {
    switch (link) {
      case 'products':
        this.setState({
          productsClasses: 'is-active',
          suppliesClasses: '',
          sourcesClasses: ''
        });
        break;
      case 'supplies':
        this.setState({
          productsClasses: '',
          suppliesClasses: 'is-active',
          sourcesClasses: ''
        });
        break;
      case 'sources':
        this.setState({
          productsClasses: '',
          suppliesClasses: '',
          sourcesClasses: 'is-active'
        });
        break;
      default:
        this.setState({
          productsClasses: '',
          suppliesClasses: '',
          sourcesClasses: ''
        });
        break;
    }
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
          <li className={this.state.productsClasses}><Link to="/products" onClick={() => {this.toggle('products')}}>Products</Link></li>
          <li className={this.state.suppliesClasses}><Link to="/products/supplies" onClick={() => {this.toggle('supplies')}}>Supplies</Link></li>
          <li className={this.state.sourcesClasses}><Link to="/products/sources" onClick={() => {this.toggle('sources')}}>Sources</Link></li>
        </ul>
      </div>
    );
  };
};

export default Nav;
