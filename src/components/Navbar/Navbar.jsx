import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from "../../constants/images"
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="App Logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href='#home'>Home </a></li>
        <li className="p__opensans"><a href='#about'>About </a></li>
        <li className="p__opensans"><a href='#menu'>Menu </a></li>
        <li className="p__opensans"><a href='#awards'>Awards </a></li>
        <li className="p__opensans"><a href='#contact'>Contact </a></li>
      </ul>
      <div className="app__navbar-login">
        <a className="p__opensans" href="#login">Login / Register</a>
        <div />
        <a className="p__opensans" href="#Book"> Book Table</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu fontSize={27} color="#ffff" onClick={() => { setToggleMenu(true); }} />
        {toggleMenu &&
          <div className="app__navbar-smallscreen_overlay flex_center slide_bottom">
            <MdOutlineRestaurantMenu className="overlay_close" fontSize={27} onClick={() => { setToggleMenu(false) }} />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans"><a href='#home'>Home </a></li>
              <li className="p__opensans"><a href='#about'>About </a></li>
              <li className="p__opensans"><a href='#menu'>Menu </a></li>
              <li className="p__opensans"><a href='#awards'>Awards </a></li>
              <li className="p__opensans"><a href='#contact'>Contact </a></li>
            </ul>
          </div>}


      </div>
    </nav>
  )
};

export default Navbar;
