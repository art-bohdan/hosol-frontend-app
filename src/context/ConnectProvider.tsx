import React, { PropsWithChildren } from "react";

interface IConnectProvider {
  connectWallet: () => void;
  publicKey: null | string;
  setPublicKey: React.Dispatch<React.SetStateAction<null | string>>;
}

export const ConnectContext = React.createContext<IConnectProvider>(
  null as any
);

export const ConnectProvider = (props: PropsWithChildren<{}>) => {
  const [publicKey, setPublicKey] = React.useState<string | null>(null);

  const getProvider = () => {
    if ("phantom" in window) {
      const provider = (window as any).phantom?.solana;

      if (provider?.isPhantom) {
        return provider;
      }
    }

    window.open("https://phantom.app/", "_blank");
  };

  const connectWallet = async () => {
    const provider = getProvider();
    const response = await provider!.connect();
    if (response) {
      provider.on("connect", () => {
        setPublicKey(provider.publicKey.toString());
      });
    }
  };

  React.useEffect(() => {
    (async () => {
      connectWallet();
    })();
  }, []);

  return (
    <ConnectContext.Provider value={{ connectWallet, publicKey, setPublicKey }}>
      {props.children}
    </ConnectContext.Provider>
  );
};

export const useConnect = () => React.useContext(ConnectContext);
