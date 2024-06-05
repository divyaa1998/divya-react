import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {

  const [btnNameReact,setBtnNameReact] =  useState('Login');


   useEffect(() => {
    console.log('use effect called!!');
   },[btnNameReact])
  console.log('Header rendered');
    return (
      <div className="header">
         <div className="header-logo">
            <img className="logo-img" src={LOGO_URL} />
         </div>
         <div className="nav-items">
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About Us</Link></li>
    <li><Link to='/contact'>Contact Us</Link></li>
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