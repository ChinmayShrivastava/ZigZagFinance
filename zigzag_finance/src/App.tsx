import "./styles/Home.css";
// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const Home = () => {
  // Here's how to get the thirdweb SDK instance
  // const sdk = useSDK();
  // Here's how to get a nft collection
  // const { data: program } = useProgram(
  //   your_nft_collection_address,
  //   "nft-collection"
  // );

  return (
    <>

      <div className="navbar">
        <div className="nav-container">
          <div className="logo">
            Logo
          </div>
          <div className="nav-link">
            <a href="#">Home</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <h1>Buy and Sell NFTs</h1>
          <p>Woohoo</p>
        </div>
      </div>

    </>

  );
};

export default Home;
