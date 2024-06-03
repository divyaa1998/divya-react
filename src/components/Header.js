import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {

  const [btnNameReact,setBtnNameReact] =  useState('Login')
    return (
      <div className="header">
         <div className="header-logo">
            <img className="logo-img" src={LOGO_URL} />
         </div>
         <div className="nav-items">
  <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Cart</li>
    <button onClick={() => {
      (btnNameReact === 'Login')? setBtnNameReact('Logout'):setBtnNameReact('Login')
 
    }}>{btnNameReact}</button>
  </ul>
         </div>
      </div>
    )
  }

  export default Header;