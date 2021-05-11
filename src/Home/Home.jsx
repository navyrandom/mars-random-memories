import React from 'react';
import Percy from "./percy.png";
import Jenny from "./jenny.png";
import "./Home.css";


function Home() {
  
  return (
    <div className="divRobot">
      <img src={Percy} className="percy" />
      <img src={Jenny} className="jenny"/>
    </div>
  );
}

export default Home;
