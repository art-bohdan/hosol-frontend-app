import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { DragAndDrop } from "../components/DragAndDrop";
import { Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import { Program, Provider } from "@project-serum/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { config } from "../config";
import { Header } from "./Header";
import "./Layout.css";

const programId = new PublicKey(config.contractId);
const opts = { preflightComitment: "processed" };

export const Layout: React.FC = (props: any) => {
  const data = [
    { id: "1", name: "Bob", surname: "Art" },
    { id: "2", name: "Viola", surname: "Art" },
    { id: "3", name: "Sasza", surname: "Art" },
    { id: "4", name: "Nata", surname: "Art" },
  ];

  return (
    <Box className="container">
      <Header />
      <Box component="main" className="contentWrapper">
        {/* <Toolbar /> */}
        {/* <DragAndDrop /> */}
        {data.map((el) => (
          <Data id={el.id} name={el.name} surname={el.surname} key={el.id} />
        ))}
      </Box>
    </Box>
  );
};

type DataMap = {
  id: string;
  name: string;
  surname: string;
  key: React.Key | null | undefined;
};

const Data: React.FC<DataMap> = (props) => {
  return (
    <div key={props.id}>
      {props.id}
      <span>{props.name}</span>
      <p>{props.surname}</p>
    </div>
  );
};
