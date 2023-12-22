import React from "react";
import video from '../assets/video.mp4'
import './home.css'

const Home = () => {
    return (
        <div className="Home">
            <div className="banner">
                <video src={video} autoPlay muted loop></video>
                <h2>Design <br /> Beyond</h2>
            </div>
            
        </div>
    )
}

export default Home