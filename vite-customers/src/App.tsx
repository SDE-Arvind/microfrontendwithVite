import './style.css';

// import Parcel from 'single-spa-react/parcel'
import { useState } from 'react';

// import { CustomProps, ParcelConfig, ParcelProps } from 'single-spa';
// import {Profile, getAllUsers} from '@acc/api';


export default function Root(props:any) {
  const [isLoading, setLoading] = useState<Boolean>(false);
  // const [data, setData] = useState<Profile[]|null>(null);

  // const onFetchDetails = async ()=>{
  //   setLoading(true);
  //   setTimeout(async ()=>{
  //     //set time out added to get the loading effects 
  //     const profileData = await getAllUsers();
  //     setData(profileData.data);
  //     setLoading(false);
  //   },500);  
  // }

  // const ParcelComponent = (): ParcelConfig<{}>=>{
  //   return System.import("@acc/helpdesk") as unknown as ParcelConfig<{}>;
  // }

  return (
    <div id="profile">
      <label> Customers List Micro-Frontend React Application on port 4172</label>
      {
        // (data===null && !isLoading ) ?     
          // <div id="detailsBtn">
          //   <button onClick={onFetchDetails}>Load Profiles</button>
          //   <label id="value" >  (The details will be fetched from Utility Microfrontend application )</label>
          // </div>
       // :
        // <div>
        //   {
        //   isLoading?
        //   <div id="loader"></div>
        //   :
        //   data?.map((user)=>{
        //     return (
        //     <div className='users'>
        //         <div id="detailSection">
        //           <img src={user.avatar} width={80} height={80} />
        //         </div>
        //         <div id="detailSection">
        //         <label id="field">Name:
        //           </label>
        //           <label id="value">
        //           {user.first_name} {user.last_name}
        //           </label>
        //         </div>
        //         <div id="detailSection">
        //           <label id="field">Email:</label> 
        //           <label id="value">{user.email}</label>
        //         </div>
        //         <div id="detailSection">
        //           <a href={`/orders/${user.id}`}>Open Orders</a>
        //       </div>
        //      </div>  
        //     )
        //   })
        //   }
        // </div>
      }

      {/* <Parcel
        config={ParcelComponent()}
        initiator= {"Profile Application"}
        wrapWith='div'
        wrapStyle={{position:'absolute', bottom:20, right:20}}
       /> */}
      
    </div>
);
}