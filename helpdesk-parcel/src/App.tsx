import './App.css'

import { useState } from 'react'

function App(props:any) {

  const [isHelpDeskOpened, setHelpDeskOpened]= useState<Boolean>(false);
  const toggleHelpdesk = ()=> {
    setHelpDeskOpened(!isHelpDeskOpened);
  }

  return (
    <>
      <div>
        {
          isHelpDeskOpened &&  
          <div>
            <div id='window'>
              This is the HelpDesk <label id="highlight">Parcel</label> initiated by 
               <label id="highlight"> {props.initiator}</label>
            </div>
          </div>
        }
        <div className='buttonContainer'>
          <button onClick={toggleHelpdesk}>{isHelpDeskOpened? 'Close' : 'Open'} helpDesk</button>
        </div>
      </div>
    </>
  )
}

export default App
