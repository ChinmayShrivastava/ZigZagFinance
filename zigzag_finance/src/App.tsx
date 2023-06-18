import { useState } from "react";
import './styles/index.css'
import LaunchApp from "./LaunchApp";
import FundTable from "./FundTable";
// Default styles that can be overridden by your app
// require("@solana/wallet-adapter-react-ui/styles.css");

const Home = () => {

  const [launchApp, setLaunchApp] = useState(false);

  const handleLaunchApp = () => {
    setLaunchApp(true);
  };

  let isModal = false;

  return (
    <div className="bg-black w-screen h-screen box-border">
      <div className="w-screen flex justify-end">
          { !launchApp ? 
          <div className={`mr-2 mt-2 nav-link py-5 px-4 bg-gradient-to-br from-pink-600 to-purple-500 text-white rounded-xl font-bold hover:-translate-y-1  transition-all ${launchApp ? 'invisible': 'visible'}`} onClick={handleLaunchApp}>
            Launch App
          </div>

          : null }
          </div>
         
      { launchApp ? <LaunchApp /> : 
      <><div className="container">
          <div className="content w-screen mt-40 flex flex-col justify-center items-center gap-4">
            <img src='ZizZagFin.png' className="w-24 mb-3"></img>
            <h1 className="text-white text-6xl text-center font-extrabold italic">ZigZag Finance</h1>
            <h2 className="text-pink-600 font-semibold text-2xl">On-Chain Finance Management</h2>
          </div>
        </div><FundTable></FundTable></>
      }

    </div>

  );
};

export default Home;
