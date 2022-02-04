import React from 'react';
import { Feature } from '../../components';
import "./what.css"

function What() {
  return(
     <div className="port__what section__margin" id="about">
      <div className="port__what-feature">
        <Feature title={"About me"} text={"I'm an Ex-HVAC technician and electrician, I enjoyed working with my hands and fixing things, however I had no real passion for the work I did and I didn't feel like I was contributing in a meaningful way, and so I decided to switch carriers and learn Web Development"} />
      </div>
      <div className="port__what-heading">
        <h1 className="gradient__text">
          Welcome to my Portfolio!
        </h1>
         
      </div>
      <div className="port__what-container">
        <Feature title={"Technologies"} text={"PERN stack - React + Redux, PostgreSQL, Node.js + Express.js"}/>
        <Feature title={"Education"} text={"Developers.Institute coding bootcamp graduate, Udemy Zero to Mastery React, Redux, Node.js, EdxCS50"} />
        <Feature title={"Hobbies"} text={"Mountain Biking, Drawing"} />
      </div>
  </div>
  )
}

export default What;
