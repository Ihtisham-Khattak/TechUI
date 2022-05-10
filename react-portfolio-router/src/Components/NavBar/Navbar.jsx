import React,{useState} from 'react';
import './Navbar.css';
import {SiAbletonlive} from 'react-icons/si';
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

  const [navBar , setNavBar] = useState(false);

 //Toggle Button for Navbar
  const handleNavBar = () => setNavBar(!navBar);

  return (
    
    <div name='top' className='nav-bar'>
      <div className="container">
        <div className="logo">
          <SiAbletonlive className="logo-icon" />
          <h1>Champ-Untie</h1>
        </div>

        <ul className={ navBar ? "nav-menu active" : 'nav-menu'}>
       

         
      <li>Home</li> 
     
          <li>Recovery</li>
          <li>Cloud</li>
          <li>Contact</li>
        </ul>

        <div className="hamburger" onClick={handleNavBar}>
         { 
         
            !navBar ? ( <FaBars className='icons'/>) : ( <FaTimes className='icons'/>)
         }   
        </div>
      </div>

    </div>



  )
}

export default Navbar