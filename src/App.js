import React from "react";

import Header from "./components/Header";

import UserInput from "./components/UserInput";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <UserInput />
    </div>
  );
};

export default App;
