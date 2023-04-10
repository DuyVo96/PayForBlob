import React, { useState } from "react";
import { SigningCosmosClient } from "@cosmjs/launchpad";
import SendTx from "./SendTx";

function Wallet() {
  const [cosmJS, setCosmJS] = useState(null);
  const [connected, setConnected] =
    useState(false);
  const [accounts, setAccounts] = useState([]);

  const handleConnect = async () => {
    if (!window.keplr) {
      alert("Please install keplr extension");
    } else {
      const chainId = "blockspacerace"; // Cosmos Hub chain ID

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
      setAccounts(accounts);

      // Initialize the Cosmos JS API with the offline signer that is injected by Keplr extension.
      const api = new SigningCosmosClient(
        "https://api-blockspacerace.pops.one", // Cosmos Hub RPC endpoint
        accounts[0].address,
        offlineSigner
      );

      setCosmJS(api);
      setConnected(true);
    }
  };

  const handleSignTransaction = async () => {
    const from_address = accounts[0].address;
    const to_address =
      "celestia1llm7v0mwdzs3q94e05507kk75zeamysx90gjhm";
    const amount = [
      { denom: "utia", amount: "100000" },
    ];

    const fee = {
      amount: [{ denom: "utia", amount: "500" }],
      gas: "200000",
    };

    const memo = "Sent using Keplr wallet";

    try {
      const result = await cosmJS.sendTokens(
        to_address,
        amount,
        memo,
        fee,
        from_address
      );
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        onClick={handleConnect}
        className={`bg-${
          connected ? "violet" : "violet"
        }-700 hover:bg-violet-800 trasition w-full
        lg:max-w-[162px] h-12 rounded-lg flex justify-center items-center text-white text-[12px]`}
      >
        {connected
          ? "Connected"
          : "Connect wallet"}
      </button>
      {/* {cosmJS && <p>Connected to Cosmos Hub!</p>} */}

      {cosmJS && (
        <button
          onClick={handleSignTransaction}
          className="bg-green-500 hover:bg-green-600 transition w-full
            lg:max-w-[162px] h-12 rounded-lg flex justify-center items-center text-white text-[12px] mt-4"
        >
          Sign
        </button>
      )}
    </div>
  );
}

export default Wallet;
