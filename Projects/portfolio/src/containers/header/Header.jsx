import React from 'react';
import "./header.css"
import icon1 from "../../assets/Fima-Treiger-logos/js.png"
import icon2 from "../../assets/Fima-Treiger-logos/node.png"
import icon3 from "../../assets/Fima-Treiger-logos/react.png"
import icon4 from "../../assets/Fima-Treiger-logos/redux.png"
import icon5 from "../../assets/Fima-Treiger-logos/postgres.png"
import 'animate.css'; 

function Header() {

  setTimeout(() => {
    const id = document.getElementById("anim")
    id.classList.remove("animate__fadeInRight")
  }, 2000);

  return <div className="port__header section_padding" id="home">
      <div className="port__header-content">
        <h1 id="anim" className="gradient__text animate__animated animate__fadeInRight">
          Hello, I'm Fima Treiger, a Full-Stack Web Developer
        </h1>
       <p>I have knowledge and experience in using latest web technologies, such as -
HTML, CSS, Bootstrap, 
Javascript ES6,
Git and Github version control,
React and Redux state management,
Node.js, express, Restful api,
PostgreSQL database,
Full-stack app and database deployment on cloud services like Heroku.
       </p>
       <p>I speak fluent English 🇺🇲 - Hebrew 🇮🇱 and Russian 🇷🇺</p>
       <div className="port__header-icons">
       <div className="content_img">
         <img className="shadow-pop-tr" src={icon1} alt="icon" />
         <div>Javascript ES6 Async/Await OOP</div>
        </div>
         <div className="content_img">
          <img className="shadow-pop-tr" src={icon2} alt="icon" />
          <div>Node.js Express.js</div>
        </div>
       
        <div className="content_img">
          <img className="shadow-pop-tr" src={icon3} alt="icon" />
          <div>React Hooks Class Components</div>
        </div>
        <div className="content_img">
          <img className="shadow-pop-tr" src={icon4} alt="icon" />
          <div>Redux State Management</div>
        </div>
        <div className="content_img">
          <img className="shadow-pop-tr" src={icon5} alt="icon" />
          <div>PostgreSQL/pgAdmin4 database management</div>
        </div>
       </div>
      </div>
  </div>;
}

export default Header;
