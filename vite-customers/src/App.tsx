import './style.css';

import {Profile, getAllUsers} from '@acc/api';

import Parcel from 'single-spa-react/parcel'
import { ParcelConfig } from 'single-spa';
import { useState } from 'react';

export default function App() {
  const [isLoading, setLoading] = useState<Boolean>(false);
  const [data, setData] = useState<Profile[]|null>(null);

  const onFetchDetails = async ()=>{
    setLoading(true);
    setTimeout(async ()=>{
      //set time out added to get the loading effects 
      const profileData = await getAllUsers();
      setData(profileData.data);
      setLoading(false);
    },500);  
  }

  const ParcelComponent = (): ParcelConfig<{}>=>{
    return System.import("@acc/helpdesk") as unknown as ParcelConfig<{}>;
  }

  return (
    <div id="profile">
      <label id="title"> Customers List Micro-Frontend React Application on port 4172</label>
      {
        (data===null && !isLoading ) ?     
          <div id="detailsBtn">
            <button onClick={onFetchDetails}>Load Profiles</button>
            <label id="value" >  (The details will be fetched from Utility Microfrontend application hosted on port 4174)</label>
          </div>
       :
        <div>
          {
          isLoading?
          <div id="loader"></div>
          :
          data?.map((user)=>{
            return (
            <div className='users'>
                <div id="detailSection">
                  <img src={user.avatar} className="profileImage"/>
                </div>
                <div>
                <div id="detailSection">
                <label id="field">Name:
                  </label>
                  <label id="value">
                  {user.first_name} {user.last_name}
                  </label>
                </div>
                <div id="detailSection">
                  <label id="field">Email:</label> 
                  <label id="value">{user.email}</label>
                </div>
                <div id="detailSection">
                  <a href={`/orders/${user.id}`}>View Orders</a>
              </div>
              </div>
             </div>  
            )
          })
          }
        </div>
      }

       <Parcel
        config={ParcelComponent()}
        initiator= {"Customer MFA"}
        wrapWith='div'
        wrapStyle={{position:'absolute', bottom:20, right:20}}
       />
      
    </div>
);
}
