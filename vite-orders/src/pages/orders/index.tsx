import './style.css'

import {OrderDetail, getOrderDetails, getProfileDetails} from '@acc/api';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

export const Orders= ()=> {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [orders, setOrders] = useState<OrderDetail | null>(null);
  const params = useParams<{id:string}>();

  useEffect(()=>{
    setTimeout(async ()=>{
      //set time out added to get the loading effects 
      const profileData = await getProfileDetails(Number(params.id));
      const orderData = await getOrderDetails(Number(params.id));
      setOrders(orderData);
      const event = new CustomEvent('profile-order-fetched',{
        detail:{
          user: profileData.data,
          qty: orderData.totalQuantity,
          price: orderData.total
        }
      });
      window.dispatchEvent(event);
      setLoading(false);
    },500);  
  },[]);

  
  return (
    <div className='container'>
      <div>
      <label id="title"> Orders Application Micro-Frontend React Application on port 4173  </label>
      <div>
        {
        isLoading?
          <div id="loader" style={{marginTop:'30px', marginBottom:'30px'}}></div>
        :
        orders?.products && 
        orders.products.map(order=>{
          return(
          <div className='orderItem' key={order.id}>           
              <div id="detailSection">
                <img src={order?.thumbnail} width={80} height={80} />
              </div>
              <div>
                <div id="detailSection">
                <label id="fieldOrder">Product:
                  </label>
                  <label id="valueOrder">
                  {order?.title}
                  </label>
                </div>
                <div id="detailSection">
                  <label id="fieldOrder">Quantity:</label> 
                  <label id="valueOrder">{order?.quantity}</label>
                </div>
                <div id="detailSection">
                  <label id="fieldOrder">Price:</label> 
                  <label id="valueOrder">{order?.price}</label>
                </div>
              </div>
            </div> 
          )
        })
        }
      </div>
      <div className='footer'>
        <a href='/profiles'>Back to profiles list</a>
      </div>
    </div>
    </div>
  )
}
