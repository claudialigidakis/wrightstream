// REACT
import React from 'react';

// ==========

class AdminMenu extends React.Component {

  render () {
    return (
      <aside className="menu">
        <p className="menu-label">
          Shop Tracking
        </p>
        <ul className="menu-list">
          <li><a href="/admin/dashboard">Dashboard</a></li>
          <li><a href="/admin/staff">Staff</a></li>
          <li><a href="/admin/products">Products</a></li>
          <li><a href="/admin/purchases">Purchases</a></li>
          <li><a href="/admin/supplies">Supplies</a></li>
        </ul>
      </aside>
    );
  };
};



export default AdminMenu;
