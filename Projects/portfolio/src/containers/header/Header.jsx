import React from 'react';
import "./header.css"
import icon1 from "../../assets/Fima-Treiger-logos/js.png"
import icon2 from "../../assets/Fima-Treiger-logos/node.png"
import icon3 from "../../assets/Fima-Treiger-logos/react.png"
import icon4 from "../../assets/Fima-Treiger-logos/redux.png"
import icon5 from "../../assets/Fima-Treiger-logos/postgres.png"

function Header() {
  return <div className="port__header section_padding" id="home">
      <div className="port__header-content">
        <h1 className="gradient__text">
          Hello, i'm Fima Treiger, a Full-Stack Web Developer
        </h1>
       <p>knowledge and experience in using latest web technologies -
HTML, CSS, Bootstrap, 
Javascript ES6,
Git and Github version control,
React and Redux state management,
Node.js, express, Restful api,
PostgreSQL database,
Full-stack app and database deployment on cloud services like Heroku.
       </p>
       <div className="port__header-icons">
         <img src={icon1} alt="icon" />
         <img src={icon2} alt="icon" />
         <img src={icon3} alt="icon" />
         <img src={icon4} alt="icon" />
         <img src={icon5} alt="icon" />
       </div>
      </div>
  </div>;
}

export default Header;
