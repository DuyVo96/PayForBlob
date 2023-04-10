import React, { useState } from "react";
import { SigningCosmosClient } from "@cosmjs/launchpad";

function Wallet() {
  const [cosmJS, setCosmJS] = useState(null);
  const [connected, setConnected] =
    useState(false);

  const handleConnect = async () => {
    if (!window.keplr) {
      alert("Please install keplr extension");
    } else {
      const chainId = "cosmoshub-4"; // Cosmos Hub chain ID

      // Enabling before using the Keplr is recommended.
      // This method will ask the user whether to allow access if they haven't visited this website.
      // Also, it will request that the user unlock the wallet if the wallet is locked.
      await window.keplr.enable(chainId);

      const offlineSigner =
        window.keplr.getOfflineSigner(chainId);

      // You can get the address/public keys by `getAccounts` method.
      // It can return the array of address/public key.
      // But, currently, Keplr extension manages only one address/public key pair.
      // XXX: This line is needed to set the sender address for SigningCosmosClient.
      const accounts =
        await offlineSigner.getAccounts();

      // Initialize the Cosmos JS API with the offline signer that is injected by Keplr extension.
      const api = new SigningCosmosClient(
        "https://lcd-cosmoshub.keplr.app", // Cosmos Hub RPC endpoint
        accounts[0].address,
        offlineSigner
      );

      setCosmJS(api);
      setConnected(true);
    }
  };

  return (
    <div>
      <button
        onClick={handleConnect}
        className={`bg-${
          connected ? "violet" : "red"
        }-700 hover:bg-violet-800 trasition w-full
        lg:max-w-[162px] h-12 rounded-lg flex justify-center items-center text-white text-[12px]`}
      >
        {connected
          ? "Connected"
          : "Connect wallet"}
      </button>
      {/* {cosmJS && <p>Connected to Cosmos Hub!</p>} */}
    </div>
  );
}

export default Wallet;
