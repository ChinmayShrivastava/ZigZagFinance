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
import Table from "./Table";

// Change the network to the one you want to use: "mainnet-beta", "testnet", "devnet", "localhost" or your own RPC endpoint
// const network: Network = "devnet";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ThirdwebProvider
    supportedWallets={[
      metamaskWallet(),
      // coinbaseWallet(),
      // walletConnect({
      //   projectId: "YOUR_PROJECT_ID",
      // }),
      // walletConnectV1(),
      // safeWallet(),
      // paperWallet({
      //   clientId: "YOUR_CLIENT_ID",
      // }),
      // magicLink({
      //   apiKey: "YOUR_MAGIC_API_KEY",
      // }),
    ]}
    activeChain={{
      // === Required information for connecting to the network === \\
      chainId: 1287
      , // Chain ID of the network
      // Array of RPC URLs to use
      rpc: ["https://moonbase-alpha.rpc.thirdweb.com"],

      // === Information for adding the network to your wallet (how it will appear for first time users) === \\
      // Information about the chains native currency (i.e. the currency that is used to pay for gas)
      nativeCurrency: {
        decimals: 18,
        name: "Dev",
        symbol: "DEV",
      },
      shortName: "Moonbase", // Display value shown in the wallet UI
      slug: "Moonbase", // Display value shown in the wallet UI
      testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
      chain: "Moonbase Alpha", // Name of the network
      name: "Moonbase Alpha Testnet", // Name of the network
    }}
  >
    <Router>
      <Routes>
        {/* <WalletModalProvider> */}
        {/* {<ConnectWallet />} */}
        <Route path="/" element={<App></App>} />
        <Route path="/fund/:address" element={<Table></Table>} />
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
