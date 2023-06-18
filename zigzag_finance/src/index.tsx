import { Network } from "@thirdweb-dev/sdk/solana";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnectV1,
  walletConnect,
  safeWallet,
  paperWallet,
  magicLink,
} from "@thirdweb-dev/react";
// import "./styles/globals.css";ss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FundTable from "./FundTable";
import UserForm from "./UserForm";

// Change the network to the one you want to use: "mainnet-beta", "testnet", "devnet", "localhost" or your own RPC endpoint
const network: Network = "devnet";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ThirdwebProvider
    supportedWallets={[
      metamaskWallet(),
      coinbaseWallet(),
      walletConnect({
        projectId: "YOUR_PROJECT_ID",
      }),
      walletConnectV1(),
      safeWallet(),
      paperWallet({
        clientId: "YOUR_CLIENT_ID",
      }),
      magicLink({
        apiKey: "YOUR_MAGIC_API_KEY",
      }),
    ]}
    activeChain="mumbai"
  >
    <Router>
      <Routes>
        {/* <WalletModalProvider> */}
        {/* {<ConnectWallet />} */}
        <Route path="/" element={<App></App>} />
        <Route path="/investor" element={<FundTable></FundTable>} />
        <Route path="/manager" element={<UserForm></UserForm>} />
        {/* </WalletModalProvider> */}
      </Routes>
    </Router>
  </ThirdwebProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
