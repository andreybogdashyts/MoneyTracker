import React, { Component } from "react";
import NavBar, { ElementsWrapper } from "react-scrolling-nav";
import "../index.css";
//class App extends Component {
//  render() {
  export const ScrolNav: React.FC = () => {
const navbarItems = [
      {
        label: "Item 1",
        target: "item-1"
      },
      {
        label: "Item 2",
        target: "item-2"
      },
      {
        label: "Item 3",
        target: "item-3"
      },
      {
        label: "Item 4",
        target: "item-4"
      },
      {
        label: "Item 5",
        target: "item-5"
      },
      {
        label: "Item 6",
        target: "item-6"
      }
    ];
    return (
      <div>
        <NavBar

                items={navbarItems} // Required, the items you want to navigate
                offset={-80} // scroll additional px
                duration={500} // time of scroll animation
                delay={0} // wait x milliseconds before scroll
                height={70} // the height of navbar
              //  backgroundColor={"#222"} // the background color of navbar
                coverWidth={700} // the width of the gradient cover, default is calculated by (navWidth * count of navItems)
                navWidth={86} // the width of every item on navbar
                linkClass={"link"} // the class of link
                activeLinkClass={"activeLink"} 
                            
               
                 />
        <div className="container">
          <ElementsWrapper items={navbarItems}>
            <div  className="item">
              item 111
            </div>
            <div  className="item">
              item 211
            </div>
            <div  className="item">
              item 3
            </div>
            <div  className="item">
              item 4
            </div>
            <div  className="item">
              item 5
            </div>
            <div  className="item">
              item 6
            </div>
          </ElementsWrapper>
        </div>
      </div>
    );
  }

 
