import React from 'react';
import { Feature } from '../../components';

import "./features.css"


function Features() {
  return <div className="port__features section__padding" id="projects">
     <div className="port__features-heading">
       <h1 className="gradient__text">
        You can take a look at my projects
       </h1>
       <p>I will keep adding new projects here as I create new and exciting apps!</p>
       <p>Click on a project name to view the deployed app</p>
       <p>You can download my CV by clicking the "Get CV" button at the top and contact me below using email.js</p>
     </div>
     <div className="port__features-container">
      <Feature title={<a href="https://github.com/TrixieI/hackathon-2"  target="_blank" rel="noreferrer">"Weathytrav"</a>} text={"Full-stack application created with Javascript, Node.js, Express.js PostgreSQL database with pgAdmin4, accessed and manipulated with DOTENV and KNEX, password encryption with Bcrypt.js, login and register form checks for existing users and compares encrypted passwords with the real password on login and deployed on Heroku with a database."} />
      <a href="https://github.com/TrixieI/hackathon-2"><p className="gradient__text">source code</p></a> 
      <Feature title={<a href="https://dndpal.herokuapp.com/" target="_blank" rel="noreferrer">"D&D Pal"</a>} text={"Full-Stack D&D companion app created with React, Node.js, Express, Bcrypt.js for password hashing and KNEX to connect with PostgreSQL, React-Router and Redux, the app has a Login and Registration form, a Home page with Bootstrap navbar with protected routes that check if the user received authentication from the server, a welcome message for the user and Resources tabs utilizing D&D 5e API for information and deployed on Heroku"} />
     <a href="https://github.com/TrixieI/DnD-pal" ><p className="gradient__text">source code</p></a>
      <Feature title={<a href="https://cardmem.netlify.app/" target="_blank" rel="noreferrer">"Memory Game"</a>} text={"Card memory game created with pure HTML, CSS and vanilla JavaScript using DOM manipulation"} />
     <a href="https://github.com/TrixieI/hackathon-1" ><p className="gradient__text">source code</p></a>
      <Feature title={<a href="https://project-nasa.netlify.app/" target="_blank" rel="noreferrer">"Project NASA"</a>} text={"NASA API single page application created with React.js and React-Router, deployed on Netlify"} />
     <a href="https://github.com/TrixieI/nasa/tree/main/project-nasa" ><p className="gradient__text">source code</p></a>
     </div>
  </div>;
}

export default Features;
