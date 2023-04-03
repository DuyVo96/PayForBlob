import React from "react";

import Header from "./components/Header";

import GenerateNamespace from "./components/GenerateNamespace";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <GenerateNamespace />
    </div>
  );
};

export default App;
