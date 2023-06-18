import { useState } from "react";
import "./styles/Home.css";
import LaunchApp from "./LaunchApp";
// Default styles that can be overridden by your app
// require("@solana/wallet-adapter-react-ui/styles.css");

const Home = () => {

  const [launchApp, setLaunchApp] = useState(false);

  const handleLaunchApp = () => {
    setLaunchApp(true);
  };

  return (
    <>

      <div className="navbar">
        <div className="nav-container">
          <div className="logo">
            Logo
          </div>
          { !launchApp ? 
          <div className="nav-link" onClick={handleLaunchApp}>
            <a href="#">Home</a>
          </div>
          : null }
        </div>
      </div>

      { launchApp ? <LaunchApp /> : 
      <div className="container">
        <div className="content">
          <h1>Buy and Sell NFTs</h1>
          <p>Woohoo</p>
        </div>
      </div>
      }

    </>

  );
};

export default Home;
