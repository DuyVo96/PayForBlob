import axios from "axios";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";

function SendPFB(props) {
  const { nameSpaceID, data } = props;

  const [response, setResponse] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendData = {
    namespace_id: nameSpaceID,
    data: data,
    gas_limit: 80000,
    fee: 3000,
  };

  const handleButtonClick = () => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setResponse(null);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="flex justify-center max-w-[100px] mx-auto mb-10">
        <button
          onClick={handleButtonClick}
          className="bg-violet-700 hover:bg-violet-800 trasition w-full
      lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg
      "
        >
          Submit
        </button>
      </div>
      {loading && (
        <div className="flex justify-center mt-4 mb-6">
          <FaSpinner className="animate-spin text-4xl text-violet-700" />
        </div>
      )}
      {response && (
        <div
          className="px-[30px] py-6 max-w-[900px] mx-auto
        flex flex-col lg:flex-col justify-between gap-4 lg:gap-x-3 
        relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
        lg:backdrop-blur rounded-lg"
          style={{
            wordWrap: "break-word",
            display: "block",
          }}
        >
          <div className="self-center md:block">
            {response.height && (
              <>
                <p className="text-[16px]">
                  NAMESPACE ID:
                  <span className=" text-violet-700 font-semibold">
                    {" "}
                    {nameSpaceID}
                  </span>
                </p>

                <p className=" text-[16px]">
                  HEIGHT:
                  <span className=" text-violet-700 font-semibold">
                    {" "}
                    {response.height}
                  </span>
                </p>

                <p className="text-[16px]">
                  TXHASH:
                  <span className=" text-violet-700 font-semibold">
                    {" "}
                    {response.txhash}
                  </span>
                </p>

                <p className="text-[16px]">
                  TX LINK:
                  <span className="text-violet-700 font-semibold">
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
              </>
            )}

            {!response.height && (
              <p className="text-[16px]">
                ⛔️⛔️⛔️ Click Submit button
                again to make sure the TX is
                execute ⛔️⛔️⛔️
                {/* <span className=" text-violet-700 font-semibold">
                  {" "}
                  {response.height}
                </span> */}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SendPFB;
