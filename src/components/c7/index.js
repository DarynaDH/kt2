import './style.css';
import React from 'react';
import Glasses from '../img/glass.png'
import DronN2 from '../img/dronB.png'
import Monitor from '../img/monitor.png'



function Component7() {
  return (
    <div className="wrapC7">
      <div className='miniWrapC7'>
        <div className='Card1C7'>
          <img className='imgC71' src={Glasses}></img>
          <h3 className='h3C7'>DATA GATHERING</h3>
          <p className='pC7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Rem possimus distinctio ex. Natus totam voluptatibus 
          animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>

        </div>
        <div className='Card2C7'>
         <img className='imgDC71' src={DronN2}></img>
         <h3 className='h3C7'>IMPLEMENTATION</h3>
          <p className='pC7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus
           quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>

        </div>
        <div className='Card3C7'>
        <img className='imgC71' src={Monitor}></img>
         <h3 className='h3C7'>LAUNCH</h3>
         <p className='pC7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas 
         obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>

        </div>
      </div>
      
    </div>
  );
}

export default Component7;