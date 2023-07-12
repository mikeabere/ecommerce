import React from 'react'
import Menuicon from '../assets/menu-03.svg'
import Chevronicon from '../assets/chevron-down.svg'
import Hearticon from '../assets/heart.svg'
import Carticon from '../assets/shopping-cart-03.svg'
import Avataricon from '../assets/User Avatar.png'
import Logo from '../assets/logo2.png'

export default function Header(){

    return(
        <>
         <header>

            <div className='category-section'>
              <img src={Menuicon} alt="menu icon" />
              <h4 className='menu-text'>Categories</h4>
              <img src={Chevronicon} alt="chevron icon" />
            </div>

            <div className='logo-section'>
               <img className='logo' src={Logo} alt="logo icon" />
               <h3>Nietzshe</h3>
            </div>

            <div className='cart-avatar-heart'>
              <img src={Hearticon} alt="heart icon" />
              <img src={Carticon} alt="cart icon" />
              <img className='avatar' src={Avataricon} alt="avatar icon" />
            </div>
         </header>
        </>
    )
}