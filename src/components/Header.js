import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

  const [btnNameReact,setBtnNameReact] =  useState('Login');


   useEffect(() => {

   },[btnNameReact])
const onlineStatus = useOnlineStatus();
    return (
      <div className="flex justify-between items-center bg-pink-100">
         <div className="header-logo">
            <img className="w-28" src={LOGO_URL} />
         </div>
         <div className="nav-items">
  <ul className="flex p-4 m-4">
    <li className="px-4 font-medium">Online Status: {onlineStatus ? '✅':'🛑'} </li>
    <li className="px-4 font-medium"><Link to='/'>Home</Link></li>
    <li className="px-4 font-medium"><Link to='/about'>About Us</Link></li>
    <li className="px-4 font-medium"><Link to='/contact'>Contact Us</Link></li>
    <li className="px-4 font-medium"><Link to='/grocery'>Grocery</Link></li>
    <li className="px-4 font-medium">Cart</li>
    <button className="font-medium" onClick={() => {
      (btnNameReact === 'Login')? setBtnNameReact('Logout'):setBtnNameReact('Login')
 
    }}>{btnNameReact}</button>
  </ul>
         </div>
      </div>
    )
  }

  export default Header;