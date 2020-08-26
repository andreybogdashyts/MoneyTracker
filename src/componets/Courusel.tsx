import React from "react";



import "../index.css";
import "../slick.css";
import "../slick-theme.css";

import cat from  '../Images/cat.jpg'
import cat1 from '../Images/cat1.jpg'
import cat2 from '../Images/cat2.jpg'
import cat3 from '../Images/cat3.jpg'
import cat4 from '../Images/cat4.jpg'

// import '../../node_modules/slick-carousel/slick/slick.css';
// import '../../node_modules/slick-carousel/slick/slick-theme.css';
//import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


//export default function Courusel() {
// export  const Courusel extends Component : React.FC = () => {
    export const Courusel: React.FC = () => {
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div>
        <h3>Slide {num}</h3>
        <img src={cat2}/>
        
      </div>
    ));
    const appendDots = () => {
      return (
        <div style={{ backgroundColor: "#eee" }}>
                  </div>
      );
    }
    
    
  return (
    <div>
      <Slider  
                     
                      slidesToShow={3}
                      slidesToScroll={1}
                      autoplay={false}
                      autoplaySpeed={3000}
                      centerMode={false}
                      arrows={true}
                      dots={true}
       >
       {/* {renderSlides()}  */}
              <img src={cat}/>
              <img src={cat1}/>
              <img src={cat2}/>
              <img src={cat3}/>
              <img src={cat4}/>
              {/* <div >
                          <h3>1</h3>
          </div>
          <div>
            <h3 style={{ backgroundColor: "red",
                                   color: "blue"
               }}
            >
             2
            </h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
      </Slider>
    </div>
  );
}