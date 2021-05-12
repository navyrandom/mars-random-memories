import { Card } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import BlaBlaBla from "./BlaBlaBla";
import "./Home.css";



function Home() {
  const [sound, setSound]= useState(false)
  const [display, setDisplay]=useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSound(!sound)
      setDisplay(!display)
      
    }, 2300);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(!display)
      
    }, 31000);
    return () => clearTimeout(timer);
  }, [display]);
  return (
    
    <div className="robots">
      <img src="/jenny.png" alt="jenny" className="jenny" />
      <img src="/percy.png" alt="percy" className="percy" />
      {sound && (<ReactAudioPlayer
        autoPlay="true"
        src="./Robotvox1.mp3"
       
        style={{ borderRadius: "30%", height: "20px" }}
        volume="0.001"
      />)}
      {display &&(<BlaBlaBla />)}
    </div>
   
  );
}

export default Home;
