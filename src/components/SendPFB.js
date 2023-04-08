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
    // axios
    //   .post("/submit_pfb", sendData)
    //   .then((response) => {
    //     setResponse(response.data);
    //     setError(null);
    //   })
    //   .catch((error) => {
    //     setError(error);
    //     setResponse(null);
    //   });

    var myHeaders = new Headers();
    myHeaders.append(
      "Content-Type",
      "text/plain"
    );

    // var raw =
    // '{\n    "namespace_id": "0c204d39600fddd3",\n    "data": "f1f20ca8007e910a3bf8b2e61da0f26bca07ef78717a6ea54165f5",\n    "gas_limit":80000,\n    "fee": 2000\n}';

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(sendData),
      redirect: "follow",
    };

    fetch(
      "https://dv-cosmos.xyz/submit_pfb",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) =>
        setResponse(JSON.parse(result))
      )
      .catch((error) =>
        console.log("error", error)
      );
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
          <p className=" text-[26px]">
            YOURS HEIGHT IS:
            <span className=" text-violet-700 font-semibold">
              {" "}
              {response.height}
            </span>
          </p>
          <p className="text-[16px]">
            {JSON.stringify(response)}
          </p>
        </div>
      )}
    </div>
  );
}

export default SendPFB;
