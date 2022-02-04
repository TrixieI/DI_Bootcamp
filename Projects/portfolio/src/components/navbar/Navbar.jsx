import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./navbar.css"

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return <div className="port__navbar">
     <div className="port__navbar-links">
      
      <div className="port__navbar-links_container">
        <p><a href="#home">Home</a></p>
        <p><a href="#about">About</a></p>
        <p><a href="#projects">Projects</a></p>
        <p><a href="#contact">Contact</a></p>
      </div>
      <div className="port__navbar-sign">
        <button type="button">
        <a className="button" href="../../assets/CV/FimaTreigerCV.pdf" download = "FimaTreigerCV.pdf">
          Get CV
          </a>
        </button>
      </div>
     </div>
     <div className="port__navbar-menu">
       {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
      }
      {toggleMenu && (
        <div className="port__navbar-menu_container scale-up-center">
          <div className="port__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
        <p><a href="#about">About</a></p>
        <p><a href="#projects">Projects</a></p>
        <p><a href="#contact">Contact</a></p>
          </div>
          <div className="port__navbar-menu_container-links-sign">
        <button type="button">
        <a className="button" href="../../assets/CV/FimaTreigerCV.pdf" download = "FimaTreigerCV.pdf">
          Get CV
          </a>
        </button>
      </div>
        </div>
      )}
     </div>
  </div>;
}

export default Navbar;
