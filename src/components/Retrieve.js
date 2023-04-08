import axios from "axios";
import React, { useState } from "react";

function Retrieve(props) {
  const { nameSpaceID2, height } = props;

  const [responseData, setResponseData] =
    useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://dv-cosmos.xyz/namespaced_shares/${nameSpaceID2}/height/${height}`
      );
      setResponseData(response.data);
    } catch (error) {
      console.log(error);
    }
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
          onClick={fetchData}
          className="bg-violet-700 hover:bg-violet-800 trasition w-full
      lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg
      "
        >
          Submit
        </button>
      </div>
      {responseData && (
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
          <p className="text-[15px]">
            {JSON.stringify(responseData)}
          </p>
        </div>
      )}
    </div>
  );
}

export default Retrieve;
