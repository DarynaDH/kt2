import './style.css';
import React from 'react';
import Img1C12 from '../img/picture.png'


function Component12() {
  return (
    <div className="wrapC12">
      <div className='wrapLeftC12'>
        <div className='textWLC12'>
          <h1 className='h1C12L'>
          CONTACT US
          </h1>
          <p className='pC12L'>
          Natus totam voluptatibus animi 
          aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias 
          blanditiis consequuntur sunt nisi.
          </p>
        </div>
        <div className='firstImputsC12'>
          <input className='Input1C12' placeholder='First name'></input>
          <input className='Input2C12' placeholder='Last name'></input>
        </div>
        <div className='anotherInputs'>
          <input className='Input3C12' placeholder='Subject'></input>
          <input className='Input4C12' placeholder='Email'></input>
          <input className='Input5C12' placeholder='Write your message'></input>
      
        </div>
        <div className='wrapBtnC12'>
           <button className='btnC12'>SEND MESSAGE</button>
        </div>
      </div>
      <div className='wrapImg1C12'>
        <img className='Img1C12' src={Img1C12} alt='decor img'></img>
      </div>

      
    </div>
  );
}

export default Component12;