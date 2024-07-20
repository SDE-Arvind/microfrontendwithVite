import './styles.css';

import React, { useEffect, useState } from 'react';

function Header() {

  return (
    <div id="header">
      <div className='actionBar'>
      <label className="label">This is the header component from Root Project on port 8000</label>
        <nav>
          <ul id='menu'>
            <li><a id="menu" href="/profiles">Customers</a></li>
            {/* <li><a href="/address" id="menu">Address</a></li> */}
            {/* <li><a href="/orders" id="menu">Orders</a></li> */}
          </ul>
        </nav>
      </div>
     
    </div>
  );
}
export default Header;