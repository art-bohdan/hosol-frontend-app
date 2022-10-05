import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Button } from "../components/Button";
import { useConnect } from "../context/ConnectProvider";

interface IHeader {}

export const Header: React.FC<IHeader> = (props) => {
  const { publicKey, connectWallet } = useConnect();

  return (
    <AppBar className="header" component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <img src={"./HOSOL.png"} style={{ width: 32 }} />
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button
            title={publicKey ? "Wallet Connected" : "Connect Wallet"}
            onClick={connectWallet}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
