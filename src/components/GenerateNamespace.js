import React, { useState } from "react";
import SendPFB from "./SendPFB";
import Retrieve from "./Retrieve";

function GenerateNamespace() {
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
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 
    relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
    lg:backdrop-blur rounded-lg"
      >
        <h1 className="text-[35px] items-center font-semibold">
          1. Submit PayForBlob Transactions
        </h1>
      </div>

      <div
        className="px-[30px] py-6 max-w-[900px] mx-auto 
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 
    relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
    lg:backdrop-blur rounded-lg"
      >
        <h1 className="text-[23px] items-center ">
          Go to this link to get your "namespace
          ID" and "hex-encoded message" to fill
          this blank.
          <p className="text-violet-700 font-semibold">
            <a
              href="https://go.dev/play/p/7ltvaj8lhRl"
              target="_blank"
              rel="noreferrer"
            >
              https://go.dev/play/p/7ltvaj8lhRl
            </a>
          </p>
        </h1>
      </div>

      <div
        className="px-[30px] py-6 max-w-[900px] mx-auto 
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 
    relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
    lg:backdrop-blur rounded-lg"
      >
        <p className="text-[26px] self-center">
          Enter your namespace ID:
        </p>
        <input
          type="text"
          value={nameSpaceID}
          onChange={handleNameSpaceIDChange}
          className="border text-[26px] border-violet-700 self-center text-center"
        />
      </div>

      <div
        className="px-[30px] py-6 max-w-[900px] mx-auto 
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 
    relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
    lg:backdrop-blur rounded-lg"
      >
        <p className="text-[26px] self-center">
          Enter your hex-encoded message:
        </p>

        <input
          type="text"
          value={data}
          onChange={handleDataChange}
          className="border text-[26px] border-violet-700 self-center text-center"
        />
      </div>
      <SendPFB
        nameSpaceID={nameSpaceID}
        data={data}
      />

      <div
        className="px-[30px] py-6 max-w-[900px] mx-auto 
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 
    relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
    lg:backdrop-blur rounded-lg"
      >
        <h1 className="text-[35px] items-center font-semibold">
          2. Retrieve the data by block height and
          namespace
        </h1>
      </div>

      <div
        className="px-[30px] py-6 max-w-[900px] mx-auto 
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 
    relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
    lg:backdrop-blur rounded-lg"
      >
        <p className="text-[26px] self-center">
          Enter your namespace ID:
        </p>
        <input
          type="text"
          value={nameSpaceID2}
          onChange={handleNameSpaceID2Change}
          className="border text-[26px] border-violet-700 self-center text-center"
        />
      </div>

      <div
        className="px-[30px] py-6 max-w-[900px] mx-auto 
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 
    relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
    lg:backdrop-blur rounded-lg"
      >
        <p className="text-[26px] self-center">
          Enter your height:
        </p>

        <input
          type="text"
          value={height}
          onChange={handleHeightChange}
          className="border text-[26px] border-violet-700 self-center text-center"
        />
      </div>

      <Retrieve
        nameSpaceID2={nameSpaceID2}
        height={height}
      />
    </div>
  );
}

export default GenerateNamespace;
