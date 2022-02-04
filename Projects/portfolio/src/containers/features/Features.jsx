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
       <p>Want to give me a chance? you can take a look at my CV and contact me!</p>
     </div>
     <div className="port__features-container">
      <Feature title={<a href="https://github.com/TrixieI/hackathon-2" target="_blank" rel="noreferrer">"Weathytrav"</a>} text={"Full-stack application created with Javascript, Node.js, Express.js PostgreSQL database with pgAdmin4, accessed and manipulated with DOTENV and KNEX, password encryption with Bcrypt.js, login and register form checks for existing users and compares encrypted passwords with the real password on login and deployed on Heroku with a database."} />
     </div>
  </div>;
}

export default Features;
