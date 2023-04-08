import axios from "axios";
import React, { useState } from "react";

function SendPFB(props) {
  const { nameSpaceID, data } = props;

  const [response, setResponse] = useState();
  const [error, setError] = useState(null);

  const sendData = {
    namespace_id: nameSpaceID,
    data: data,
    gas_limit: 80000,
    fee: 3000,
  };

  const handleButtonClick = () => {
    var config = {
      method: "post",
      url: "https://dv-cosmos.xyz/submit_pfb",
      headers: {
        "Content-Type": "text/plain",
      },
      data: sendData,
    };

    axios(config)
      .then((response) => {
        setResponse(response.data);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setResponse(null);
      });
  };

  return (
    <div>
      <div
        className="px-[30px] py-6 max-w-[200px] mx-auto 
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 
    relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
    lg:backdrop-blur rounded-lg"
      >
        <button
          onClick={handleButtonClick}
          className="bg-violet-700 hover:bg-violet-800 trasition w-full
      lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg
      "
        >
          Submit
        </button>
      </div>
      {response && (
        <div
          className="px-[30px] py-6 max-w-[2000px] mx-auto 
        flex flex-col lg:flex-col justify-between gap-4 lg:gap-x-3 
        relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
        lg:backdrop-blur rounded-lg"
          style={{ wordWrap: "break-word" }}
        >
          <p className="text-[26px] self-center">
            Response:
          </p>

          <p className=" text-[20px]">
            NAMESPACE ID:
            <span className=" text-violet-700 font-semibold">
              {" "}
              {nameSpaceID}
            </span>
          </p>

          <p className=" text-[20px]">
            HEIGHT:
            <span className=" text-violet-700 font-semibold">
              {" "}
              {response.height}
            </span>
          </p>

          <p className=" text-[20px]">
            TXHASH:
            <span className=" text-violet-700 font-semibold">
              {" "}
              {response.txhash}
            </span>
          </p>

          <p className=" text-[20px]">
            TX LINK:
            <span className=" text-violet-700 font-semibold">
              {" "}
              <a
                href={`https://testnet.mintscan.io/celestia-incentivized-testnet/txs/${response.txhash}`}
                target="_blank"
                rel="noreferrer"
              >
                LINK
              </a>
            </span>
          </p>
          <p className="text-[15px]">
            {JSON.stringify(response)}
          </p>
        </div>
      )}
    </div>
  );
}

export default SendPFB;
