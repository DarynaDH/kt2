import './style.css';
import React from 'react';
import Video from '../img/Animation Of Milky Way.mp4'


function Component11() {
  return (
    <div className="wrapC11">

      <video src={Video} width="900px" height="500px" controls autoplay loop></video>
      
    </div>
  );
}

export default Component11;