import React from "react";
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Women from '../img/women.png'
import Scater from '../img/scater.png'
import Cafe from '../img/cafe.png'
import Droncik from '../img/img_1.png'

import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div className="wrapSlides">    
        <div className="wrapImgSlide">
          <div className="wrapTextC1">
             <h1 className="h1C1">WELCOME</h1>
                 <p className="pC11">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button className="btnC1">GET STARTED</button>
            </div>
           <img src={Women} className="imgSl"></img>
        </div>
      </div>
      <div className="wrapSlides">    
        <div className="wrapImgSlide">
          <div className="wrapTextC1">
             <h1 className="h1C1">WELCOME</h1>
                 <p className="pC11">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button className="btnC1">GET STARTED</button>
            </div>
           <img src={Scater} className="imgSl"></img>
        </div>
      </div>
      <div className="wrapSlides">    
        <div className="wrapImgSlide">
          <div className="wrapTextC1">
             <h1 className="h1C1">WELCOME</h1>
                 <p className="pC11">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button className="btnC1">GET STARTED</button>
            </div>
           <img src={Cafe} className="imgSl"></img>
        </div>
      </div>
      <div className="wrapSlides">    
        <div className="wrapImgSlide">
          <div className="wrapTextC1">
             <h1 className="h1C1">WELCOME</h1>
                 <p className="pC11">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button className="btnC1">GET STARTED</button>
            </div>
           <img src={Droncik} className="imgSl"></img>
        </div>
      </div>
    </Slider>
  );
}


