import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  CoinbaseWalletAdapter,
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
  TokenaryWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { ConnectProvider } from "./context/ConnectProvider";
import { Layout } from "./Layout/Layout";
import "./App.css";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

export const App: FC = () => {
  // You can also provide a custom RPC endpoint.
  const network = useMemo(() => clusterApiUrl("devnet"), []);

  // const wallets = useMemo(
  //   () => [
  //     /**
  //      * Select the wallets you wish to support, by instantiating wallet adapters here.
  //      *
  //      * Common adapters can be found in the npm package `@solana/wallet-adapter-wallets`.
  //      * That package supports tree shaking and lazy loading -- only the wallets you import
  //      * will be compiled into your application, and only the dependencies of wallets that
  //      * your users connect to will be loaded.
  //      */
  //     new PhantomWalletAdapter(),
  //   ],
  //   []
  // );

  return (
    // <ConnectionProvider endpoint={network}>
    //   <WalletProvider wallets={wallets} autoConnect> */}
    //   <WalletModalProvider>
    <>
      {/* <WalletMultiButton /> */}
      {/* <WalletDisconnectButton /> */}
      <ConnectProvider>
        <Layout />
      </ConnectProvider>
    </>
  );
};
