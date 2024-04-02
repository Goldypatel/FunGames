import React from 'react';
import logo from '../images/games.png';
function Navbar() {
  return (
    <div className='navbar'>
       <div className='logo'>
            <img src={logo} alt=''></img>
       </div>
       <div className='nav-elements'>
           <a href="#about">About</a>
           <a href="https://medium.com/@goldyp">Learn</a>
           <a href="#Know-me">Know-Me</a>
       </div>
    </div>
  );
}

export default Navbar;
