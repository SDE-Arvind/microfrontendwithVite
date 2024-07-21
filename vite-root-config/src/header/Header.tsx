import './styles.css';

import React, { useEffect, useState } from 'react';

function Header() {
  const [data, setData] = useState<any>(null);

  useEffect(()=>{
    const listener = (event:any)=>{
      setData(event.detail);
    }
    window.addEventListener('profile-order-fetched',listener);
    return ()=>{
      window.removeEventListener('profile-order-fetched',listener);
    }
  },[]);
  return (
    <div id="header">
      <div className='actionBar'>
      <label id="title">This is the header component from Root Project on port 8000</label>
        <nav>
          <ul id='menu'>
            <li><a id="menu" href="/profiles">Customers</a></li>
            <li><a href="/contactus" id="menu">Contact Us</a></li>
          </ul>
        </nav>
      </div>
      {
        data!=null &&
        <div style={{display:'flex', alignItems:'center',  justifyContent:'end',flex:1, marginRight:'20px'}}>
          <img src={data?.user.avatar} width={60} height={60} style={{ borderRadius: '50%' }}></img> 
          <div style={{marginLeft:'20px'}}>
            <div>
              <label style={{color:'gray', fontSize:'12px'}}>{data?.user.first_name} {data?.user.last_name}</label>
            </div>
            <div>
            <label style={{color:'gray', fontSize:'10px'}}>Qty: {data?.qty}</label>
            </div>
            <div>
            <label style={{color:'gray', fontSize:'10px'}}>Total: {data?.price}</label>
              </div>
          </div>
        </div>
      }
    </div>
  );
}
export default Header;