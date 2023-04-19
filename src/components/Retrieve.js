import axios from "axios";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";

function Retrieve(props) {
  const { nameSpaceID2, height } = props;
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] =
    useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://dv-cosmos.xyz/namespaced_shares/${nameSpaceID2}/height/${height}`
      );
      setResponseData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center max-w-[100px] mx-auto mb-10">
        <button
          onClick={fetchData}
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
      {responseData && (
        <div
          className="px-[30px] py-6 max-w-[900px] mx-auto
         flex flex-col lg:flex-col justify-between gap-4 lg:gap-x-3 
         relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent 
         lg:backdrop-blur rounded-lg"
          style={{ wordWrap: "break-word" }}
        >
          <p className="text-[16px] self-center">
            Response:
          </p>
          <p className="text-[16px]">
            {JSON.stringify(responseData)}
          </p>
        </div>
      )}
    </div>
  );
}

export default Retrieve;
