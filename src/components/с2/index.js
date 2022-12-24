import React from "react";
import './style.css'
import img1 from '../img/img_1.png'
import dronImg from '../img/2.png'

function Component2() {
    return (
      <div className="wrapC2">
        <div className="wrapLeftC2">
            <h1 className="h1C2">LOVE OUR WORKS</h1>
            <p className="pC2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur 
            ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
            </p>
            <br></br>
            <p className="pC2">Aperiam neque id, illum laudantium autem vero quae debitis tempora modi. Ipsa molestias 
            enim in rem et incidunt beatae fugit, ab quam optio atque maiores facere est quidem, veritatis commodi.</p>
             <p class="pListC2">✓ Aperiam neque id illum laudantium</p>
             <p class="pListC2">✓ Maiores facere est quidem</p>
             <p class="pListC2">✓ Laudantium autem vero</p>
            
        </div>
        <div className="wrapRightC2">
            <img className="img1C2" src={img1} alt="dronImg"></img>
            <div className="wrapColorBlC2">
                <div className="colorBlC2">
                     <img className="imgDronRC2" src={dronImg} alt="dronImgMini"></img>
                     <h4 className="h4RC2">
                     PIXEL PERFECT TEMPLATES
                     </h4>
                     <p className="pRC2">
                     Lorem ipsum dolor sit amet, 
                     consectetur adipisicing elit. Obcaecati commodi 
                     aspernatur eum eius inventore facilis.
                     </p>
                     <p className="pColorRC2">Visit Colorlib</p>
                </div>
            </div>

        </div>

      </div>
    );
}
  
export default Component2;