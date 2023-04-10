import React from "react";
import Wallet from "./Wallet";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto text-center flex flex-row lg:flex-row justify-between items-center">
        <h1 className="font-semibold text-5xl text-black-700 pr-400">
          PayForBlob Transactions
        </h1>
        <h2>
          <Wallet />
        </h2>
      </div>
    </header>
  );
};

export default Header;
