import React from 'react';
import { render } from 'react-dom';
import { Link,  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "../index.css"
import '../../node_modules/materialize-css/dist/css/materialize.css';



import {Courusel} from "./Courusel";
import NestedGrid from "./Page8";
import AutoGrid from "./Page9";
import AutoGrid7 from "./Page7";
import {Example} from "./Page6";


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
export const Basic: React.FC = () => {
    return (
      <div >
<nav 
     style={{  
      backgroundColor:"black",
            marginTop:'0px',
                width: '100%',
               height:' 56px',
           lineHeight: '56px',
             position: 'fixed',
               zIndex: 5,
        }}
          >
            <div className="container-fluid ">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" 
              
              >
                <ul className="nav navbar-nav  ">
                  <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500}>UNIQUE ELEMENTS</Link></li>
                  <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>EXECUTIVE TEAM</Link></li>
                  <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500}>OUR WORK</Link></li>
                  <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>CONTACT US</Link></li>
                  {/* <li><Link className="test6" to="anchor"                     spy={true} smooth={true} duration={500}>Test 6 (anchor)</Link></li> */}
                </ul>
              </div>
            </div>
          </nav>



        <Element name="test1" className="element" 
          //style={{ border: '1px solid red',
            //  }}
            >
                      <div  style={{  
                  backgroundColor: "green",
                           height:75 ,
                       //  border: '1px solid blue',
                            color: '#ededed',
                        textAlign: 'center',
                        
          }}>
                    Unique Elements  </div>
                    <div >  <Example/> </div>

        </Element>

        <Element name="test2" className="element" 
          >
                      <div  style={{  
                  backgroundColor: 'purple',
                           height:75 ,
                        // border: '1px solid red',
                            color: '#ededed',
                        textAlign: 'center'
          }}>
                    Meet Our Executive Team  </div>
          <AutoGrid7/>
        </Element>
          <Element name="test3" className="element">
          <div  style={{  
                  backgroundColor: 'yellow',
                           height:75 ,
                        // border: '1px solid red',
                            color: 'black',
                        textAlign: 'center'
          }}>
                    Samples of Our Work </div>
            <div  className="container"style={{  
                  //backgroundColor: 'yellow',
                           height:500 ,
                          // border: '1px solid red',
                      //      color: 'black',
                    //    textAlign: 'center'
          }}>
               <Courusel/>
            </div> 
        </Element>



    <Element name="test4" className="element">
          <div  style={{  
                  backgroundColor: 'blue',
                           height:75 ,
                        // border: '1px solid red',
                            color: '#ededed',
                        textAlign: 'center'
          }}>
                    CONTACT US  </div>
          <NestedGrid/>
        </Element>



    


        <Element name="test5" className="element" style={{ backgroundColor:"black", 
                                                               paddingTop: "10px"
                                                        }}>
          <AutoGrid/>
        </Element>

{/* 
<section  id="anchor"className="flex-container">

</section> */}





      </div>
    )
  }




