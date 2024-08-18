import React from "react";
import Fade from "react-reveal/Fade";

// https://medium.com/@jakintemi/how-to-use-fade-effect-in-your-react-app-e7a72f7e1db8

const Home = () => {
    return (
      <div className="home">
        <Fade bottom duration={1500}>
          <div className="start">
            <h1>Purrs of Pakistan</h1>
            <p>
              Welcome to Purrs of Pakistan, a dedicated platform for the care and rescue of cats in need.
              Our mission is to provide life-saving treatments, rescue operations, and necessary surgeries for cats who require our help.
            </p>
            <div className="learn-button">
            <button>Learn more</button>
            </div>
          </div>
        </Fade>
      </div>
    );
  };
  
export default Home;