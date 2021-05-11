import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
        <img src="/jenny.png" alt="jenny" className="jenny" />
      <p>
        <button className="start"> Start the game </button>
      </p>
      <img src="/percy.png" alt="percy" className="percy" />
    </>
  );
}
