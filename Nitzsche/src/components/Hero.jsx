import React from 'react'
import Productimage from '../assets/Product_image.png'
import Chevronrignt from '../assets/chevron-right.svg'

export default function Hero(){

    return(
        <>
        <section className='hero-section'>

         <div className='product-name-price'>
           <div className='product-details'>
             <h6 className='tag-name' >Opening Sales Discount 50%</h6>
             <p className='product-name'>Modern White <br />
                 Velvet 3-Seater <br />
                 Sofa Channel <br />
                  Tufted Upholstered <br />
                   Luxury Solid Wood</p>
             <p className='product-description'>This velvet couch is a sophisticated and <br />
                trendy sofa that focuses on furniture bec</p>
                <button className='btn-shop'>Shop Now <span><img src={Chevronrignt} alt="" /></span></button>
           </div>
         </div>

         <div className='product-image'>
           <img className='pro-image' src={Productimage} alt="product image" />
         </div>
        </section>
        </>
    )
}