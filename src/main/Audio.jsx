import React from "react";
import ReactAudioPlayer from "react-audio-player";

function Audio() {
  return (
    <div
      style={{
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(250, 248, 248)",
        width: "20%",
        position: "fixed",
        top: 0,
        borderRadius: "5px",
        opacity: "O.5",
      }}
    >
      <ReactAudioPlayer
        autoPlay="true"
        src="./Moroder.mp3"
        controls
        style={{ borderRadius: "30%", height: "20px" }}
        volume="0.001"
      />
    </div>
  );
}

export default Audio;
