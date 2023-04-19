import React, { useState } from "react";
import SendPFB from "./SendPFB";
import Retrieve from "./Retrieve";

function UserInput() {
  // sendtx
  const [nameSpaceID, setNameSpaceID] =
    useState("");

  const [data, setData] = useState("");

  const handleNameSpaceIDChange = (event) => {
    setNameSpaceID(event.target.value);
  };

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  //retrive
  const [nameSpaceID2, setNameSpaceID2] =
    useState("");

  const [height, setHeight] = useState("");

  const handleNameSpaceID2Change = (event) => {
    setNameSpaceID2(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  return (
    <div>
      <div
        className="px-[30px] py-6 max-w-[900px] mx-auto 
    flex flex-col lg:flex-col  justify-between gap-4 lg:gap-x-3 
    relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
    lg:backdrop-blur rounded-lg"
      >
        <h1 className="text-[30px] items-center font-semibold">
          1. Submit PayForBlob Transactions
        </h1>

        <h2
          className="text-[20px] items-center"
          style={{ wordWrap: "break-word" }}
        >
          <p className="text-[16px] self-center">
            Click this{" "}
            <span className="text-[16px] text-violet-700 font-semibold">
              <a
                href="https://go.dev/play/p/7ltvaj8lhRl"
                target="_blank"
                rel="noreferrer"
              >
                LINK
              </a>
            </span>{" "}
            to get your "namespace ID" and
            "hex-encoded message" for filling this
            blank or use this :
            <div className="flex flex-col text-[16px]">
              <span className="font-semibold">
                "namespace ID" = "
                <span className="text-violet-700">
                  94d92e1ab531bfb7
                </span>
                "
              </span>
              <span className="font-semibold">
                "hex-encodedmessage" = "
                <span className="text-violet-700">
                  24a557cbf16cd1c9
                </span>
                "
              </span>
            </div>
          </p>
        </h2>

        <div>
          <div className="flex flex-col">
            <p className="text-[16px] self-center">
              NAMESPACE ID
            </p>
            <input
              type="text"
              value={nameSpaceID}
              onChange={handleNameSpaceIDChange}
              className="border text-[16px] border-violet-700 self-center text-center"
              style={{ width: "300px" }}
            />
          </div>

          <div className="flex flex-col">
            <p className="text-[16px] self-center">
              HEX_ENCODED MESSAGE
            </p>

            <input
              type="text"
              value={data}
              onChange={handleDataChange}
              className="border text-[16px] border-violet-700 self-center text-center"
              style={{ width: "300px" }}
            />
          </div>
        </div>

        <SendPFB
          nameSpaceID={nameSpaceID}
          data={data}
        />
      </div>

      <div
        className="px-[30px] py-6 max-w-[900px] mx-auto 
      flex flex-col lg:flex-col  justify-between gap-4 lg:gap-x-3 
      relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
      lg:backdrop-blur rounded-lg"
      >
        <h1 className="text-[30px] items-center font-semibold">
          2. Retrieve the data by block height and
          namespace
        </h1>

        <div>
          <div className="flex flex-col">
            <p className="text-[16px] self-center">
              NAMESPACE ID
            </p>
            <input
              type="text"
              value={nameSpaceID2}
              onChange={handleNameSpaceID2Change}
              className="border text-[16px] border-violet-700 self-center text-center"
              style={{ width: "300px" }}
            />
          </div>

          <div className="flex flex-col">
            <p className="text-[16px] self-center">
              HEIGHT
            </p>

            <input
              type="text"
              value={height}
              onChange={handleHeightChange}
              className="border text-[16px] border-violet-700 self-center text-center"
              style={{ width: "300px" }}
            />
          </div>
        </div>

        <Retrieve
          nameSpaceID2={nameSpaceID2}
          height={height}
        />
      </div>

      <div
        className="px-[30px] py-6 max-w-[900px] mx-auto 
      flex flex-col lg:flex-col  justify-between gap-4 lg:gap-x-3 
      relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
      lg:backdrop-blur rounded-lg"
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            Made by duyvo102#3738 with
            &#10084;&#10084;&#10084;
          </div>
          <div>
            Node Identity:
            12D3KooWMTMwWoXW1HLWNNnS2wzGMYJ21hXLCgjS7TRFy1sYBvgo
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInput;
