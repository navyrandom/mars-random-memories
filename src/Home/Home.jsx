import React from 'react';
import Percy from "./percy.png";
import Jenny from "./jenny.png";
import "./Home.css";


function Home() {
  
  return (
    <div className="robots">

        <img src="/jenny.png" alt="jenny" className="jenny" />
      
      <img src="/percy.png" alt="percy" className="percy" />
    </div>
  );
}

export default Home;