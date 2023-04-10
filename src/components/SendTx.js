import React, { useState } from "react";

function SendTx({ cosmJS, accounts }) {
  const [signedTx, setSignedTx] = useState(null);

  const tx = {
    type: "cosmos-sdk/MsgSend",
    value: {
      from_address: accounts[0].address,
      to_address: "recipient_address",
      amount: [
        {
          denom: "uatom",
          amount: "10000000",
        },
      ],
    },
    fee: {
      amount: [
        {
          denom: "uatom",
          amount: "5000",
        },
      ],
      gas: "200000",
    },
    memo: "Hello from ChatGPT!",
  };

  const handleSign = async () => {
    try {
      const result =
        await cosmJS.signAndBroadcast(
          [tx],
          "",
          ""
        );
      setSignedTx(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleSign}>
        Sign Transaction
      </button>
      {signedTx && (
        <p>
          Signed transaction with hash{" "}
          {signedTx.transactionHash}
        </p>
      )}
    </div>
  );
}

export default SendTx;
