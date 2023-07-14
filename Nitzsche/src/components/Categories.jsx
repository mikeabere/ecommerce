import React from "react";
import Shoppingbag from "../assets/svg/Shopping bags.svg";
import Mens from "../assets/svg/T-shirt.svg";
import Womens from "../assets/svg/Dress.svg";
import Wathes from "../assets/svg/Watch.svg";
import Homeappliance from "../assets/svg/Fork and knife with plate.svg";
import Sports from "../assets/svg/Soccer ball.svg";
import Books from "../assets/svg/Books.svg";
import Living from "../assets/svg/Shallow pan of food.svg";
import Health from "../assets/svg/Stethoscope.svg";
import Mobile from "../assets/svg/Mobile phone.svg";
import Laptop from "../assets/svg/Laptop.svg";
import Desktop from "../assets/svg/Desktop computer.svg";
import Headphones from "../assets/svg/Headphone.svg";
import Jewelery from "../assets/svg/Ring.svg";
import Improvement from "../assets/svg/Hammer and wrench.svg";
export default function Categories(){


    return(
        <>
        <section className="categories">
         <div className="cat-shopping">
           <img src={Shoppingbag} alt="shoping bag" />
           <h3>Categories</h3>
          </div>

          <div className="icons">
           <div className="mens">
             <img src={Mens} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
           <div className="mens">
             <img src={Womens} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
           <div className="mens">
             <img src={Wathes} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
           <div className="mens">
             <img src={Homeappliance} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
           <div className="mens">
             <img src={Sports} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
           <div className="mens">
             <img src={Books} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
           <div className="mens">
             <img src={Living} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
           <div className="mens">
             <img src={Health} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
           <div className="mens">
             <img src={Mobile} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
           <div className="mens">
             <img src={Laptop} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
           <div className="mens">
             <img src={Desktop} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
           <div className="mens">
             <img src={Headphones} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
           <div className="mens">
             <img src={Jewelery} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
           <div className="mens">
             <img src={Improvement} alt="mens" />
             <h5>Men Clothes</h5>
           </div>
          </div>
        </section>
        </>
    )
}