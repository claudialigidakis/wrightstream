// REACT
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom'

// ==========

class AdminMenu extends React.Component {

  render () {
    return (
      <aside className="menu">
        <p className="menu-label">
          Shop Tracking
        </p>
        <ul className="menu-list">
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/staff">Staff</Link></li>
          <li><Link to="/admin/products">Products</Link></li>
          <li><Link to="/admin/purchases">Purchases</Link></li>
          <li><Link to="/admin/supplies">Supplies</Link></li>
        </ul>
      </aside>
    );
  };
};



export default AdminMenu;
