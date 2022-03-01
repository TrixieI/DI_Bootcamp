import React from 'react';
import logo from "../../assets/Fima-Treiger-logos/Fima Treiger-logos_white.png"
import { Contact } from '../../components/contact/Contact';
import "./footer.css"

function Footer() {
  console.log(`
  ________________________
    <   TRY NOT. DO. >
    <     OR DO NOT.     >
   <  THERE IS NO TRY. >
   ------------------------
                 / 
                / 
            .--.
    |'--._,'.::.:_.--'/
      .   __::__ '  .
        -:.'..'.:-
          | --' /
           ----
                      - Yoda
  `)
  return (
   <div className="port__footer section__padding">
      <div className="port__footer-heading">
        <h1 className="gradient__text">
          Passion for Web Development
        </h1>
        <br></br>
      </div>
      <div className="port__footer-links">
        <div className="port__footer-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <Contact/>
        <div className="port__footer-links_div">
          <h2 id="contact">Links</h2>
          <a href="https://www.linkedin.com/in/fima-treiger-708853227/" target="_blank" rel="noreferrer">Linkedin</a>
          <br></br>
          <a href="https://github.com/TrixieI" target="_blank" rel="noreferrer">GitHub</a>
          <br></br>
          <h2>Contact</h2>
          <p>058-7000568</p>
          <p>Israel, Ra'anana</p>
          <p>fima.dev@zohomail.com</p>
          <br></br>
          <a href="#home">Beam me up, Scotty!</a>
        </div>
      </div>
  </div>
  )
}

export default Footer;
