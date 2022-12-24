import React from "react";
import './style.css'


function Menu() {
    return (
      <div className="Menu">
        <div className="menuRight">
            <h2 className="menuH2">
             EXPERT
            </h2>
            <div className="wrapAHome">
                <a className="aHome">Home</a>
            </div>
            <div className="wrapProgects">
                <a className="aProgects">Progects</a>
            </div>
            <div className="wrapAProcess">
                <a className="aProcess">Process</a>
            </div>
            <div className="wrapATestimonials">
                <a className="aTestimonials">Testimonials</a>
            </div>
            <div className="wrapAServices">
                <a className="aServices">Services</a>
            </div>

        </div>
        <div className="menuLeft">
            <div className="wrapAPricing">
                <a className="aPricing">Pricing</a>
            </div>
            <button className="contactBtn">Contact</button>
        </div>
        
        
      </div>
    );
  }
  
  export default Menu;