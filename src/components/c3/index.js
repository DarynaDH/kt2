import React from "react";
import './style.css'
import Img1 from '../img/refresh.png'
import Img2 from '../img/download.png'
import Img3 from '../img/monitor.png'
import Img4 from '../img/sms.png'


const s = 1800;

document.querySelectorAll('#num').forEach(counter => {

const counterNumber = +counter.getAttribute('countTo');

const updateCount = setInterval(() => {

const divContent = +counter.innerText;
const increaseBy = counterNumber / s;

    divContent < counterNumber ?
      counter.innerHTML = Math.ceil(divContent + increaseBy) :
      clearInterval(updateCount);

}, 10);

});

function Component3() {
  return (
    <div className="wrapC3">
      <div className="wrapC3NumImg">
        <div className="wrapC3Num1">
            <img className="Img1C3" src={Img1} alt='Img1'></img>
            <div id="num" class="num1" countTo="360">1</div>
            <p className="pC3">Creativity</p>

        </div>
        <div className="wrapC3Num2">
            <img className="Img2C3" src={Img2} alt='Img2'></img>
            <div id="num" class="num2" countTo="4500">1</div>
            <p className="pC3">WordPress Themes</p>

        </div>
        <div className="wrapC3Num3">
            <img className="Img3C3" src={Img3} alt='Img3'></img>
            <div id="num" class="num3" countTo="120">1</div>
            <p className="pC3">HTML5/CSS3</p>

            
        </div>
        <div className="wrapC3Num4">
            <img className="Img4C3" src={Img4} alt='Img4'></img>
            <div id="num" class="num4" countTo="3913">1</div>
            <p className="pC3">Bootstrap</p>
            
        </div>
      </div>
      
      
    </div>
  );
}

export default Component3;