import { Token } from "./@types/assets.types";
import Footer from "./components/template/Footer";
import Header from "./components/template/Header";
import { Network, networks, tokens } from "./constants/addresses.constant";

import React, { useState } from "react";

const App: React.FC = () => {
  const [showNetworkSelect, setShowNetworkSelect] = useState<boolean>(false); // Default to Base Sepolia Testnet
  const [selectedToken, setSelectedToken] = useState<Token>(tokens[42421][0]);
  const [showTokenSelect, setShowTokenSelect] = useState<boolean>(false);
  const [selectedNetwork, setSelectedNetwork] = useState<Network>(networks[0]);

  return (
    <div className="min-h-screen bg-tertiary-7 text-white font-swiss">
      {/* Background img */}
      <div className="bg-[url('/images/hero-bg.png')] bg-cover bg-center min-h-screen">
        {/* Header */}
        <Header />

        {/* Body */}
        <main className="flex flex-col items-center justify-center  pt-40  pb-12 px-6">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
            Fetch Digitsave Testnet <br /> Tokens{" "}
            <span className="bg-gradient-to-r from-[#008080] to-[#BAA013] bg-clip-text text-transparent">
              with ease
            </span>
          </h1>

          <div className="bg-[#131313] bg-opacity-80 p-6 md:p-10 rounded-lg w-full max-w-md lg:max-w-lg">
            {/* Network Section */}
            <div className="mb-4">
              <label className="block text-lg mb-2">Select Network</label>

              <div className="flex">
                <div className="flex flex-col w-full">
                  <div className="mb-4 relative">
                    <div className="w-full flex items-center justify-between bg-tertiary-6 rounded-lg px-4 cursor-pointer">
                      <div
                        className="flex w-full items-center py-4 gap-2"
                        onClick={() => setShowNetworkSelect(!showNetworkSelect)}
                      >
                        {selectedNetwork && (
                          <img
                            src={selectedNetwork.ticker}
                            alt={selectedNetwork?.name}
                            width={24}
                            height={24}
                            className="border rounded-full"
                          />
                        )}
                        <div className="flex w-full flex-col">
                          <p className="flex justify-between items-center text-sm gap-1">
                            <span className=" font-medium">
                              {selectedNetwork?.name}
                            </span>
                            <svg
                              width="12"
                              height="8"
                              viewBox="0 0 12 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.07924 7.39706C6.03921 7.44906 5.96079 7.44906 5.92076 7.39706L0.927785 0.911C0.877164 0.845243 0.924041 0.75 1.00703 0.75L10.993 0.750001C11.076 0.750001 11.1228 0.845243 11.0722 0.911L6.07924 7.39706Z"
                                fill="white"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                    {showNetworkSelect && (
                      <div className="absolute top-full left-0 bg-tertiary-6 mt-2 p-4 rounded-lg shadow-lg z-10 flex w-full h-80 overflow-y-auto flex-col gap-4 overflow-x-auto">
                        {networks.map((network, index) => (
                          <div
                            key={index}
                            className={`w-full flex justify-between items-center border border-x-0 border-t-0 pb-4 border-b-tertiary-5 cursor-pointer `}
                            onClick={() => {
                              setSelectedNetwork(network);
                            }}
                          >
                            <div
                              key={network.ticker}
                              className="flex items-center gap-2"
                            >
                              <img
                                width={32}
                                height={32}
                                src={`${network.ticker}`}
                                alt={`${network.name}`}
                                className="border border-white rounded-full"
                              />
                              <div className="flex flex-col">
                                <p className="flex items-center gap-1">
                                  <span className=" text-sm">
                                    {network.name}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Token Section */}
            <div className="mb-4">
              <label className="block text-lg mb-2">Select Token</label>

              <div className="flex">
                <div className="flex flex-col w-full">
                  <div className="mb-4 relative">
                    <div className="w-full flex items-center justify-between bg-tertiary-6 rounded-lg px-4 cursor-pointer">
                      <div
                        className="flex w-full items-center gap-2 py-4"
                        onClick={() => setShowTokenSelect(!showTokenSelect)}
                      >
                        {selectedToken && (
                          <img
                            src={selectedToken.ticker}
                            alt={selectedToken?.name}
                            width={24}
                            height={24}
                            className="border rounded-full"
                          />
                        )}
                        <div className="flex w-full flex-col">
                          <p className="flex justify-between items-center text-sm gap-1">
                            <span className=" font-medium">
                              {selectedToken?.name}
                            </span>
                            <svg
                              width="12"
                              height="8"
                              viewBox="0 0 12 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.07924 7.39706C6.03921 7.44906 5.96079 7.44906 5.92076 7.39706L0.927785 0.911C0.877164 0.845243 0.924041 0.75 1.00703 0.75L10.993 0.750001C11.076 0.750001 11.1228 0.845243 11.0722 0.911L6.07924 7.39706Z"
                                fill="white"
                              />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                    {showTokenSelect && (
                      <div className="absolute top-full left-0 bg-tertiary-6 mt-2 p-4 rounded-lg shadow-lg z-10 flex w-full h-80 overflow-y-auto flex-col gap-4 overflow-x-auto">
                        {tokens[selectedNetwork.id].map((asset, index) => (
                          <div
                            key={index}
                            className={`w-full flex justify-between items-center border border-x-0 border-t-0 pb-4 border-b-tertiary-5 cursor-pointer `}
                            onClick={() => {
                              setSelectedToken(asset);
                            }}
                          >
                            <div
                              key={asset.ticker}
                              className="flex items-center gap-2"
                            >
                              <img
                                width={32}
                                height={32}
                                src={`${asset.ticker}`}
                                alt={`${asset.name}`}
                                className="border border-white rounded-full"
                              />
                              <div className="flex flex-col">
                                <p className="flex items-center gap-1">
                                  <span className=" text-sm">{asset.name}</span>
                                </p>
                                <span className="text-[10px] text-[#979797]">
                                  {asset.fullName}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-lg mb-2">Address</label>
              <div className="flex">
                <div className="flex flex-col w-full">
                  <div className="mb-4 relative">
                    <input
                      type="text"
                      placeholder="Enter your wallet address"
                      className="bg-tertiary-6 text-white px-4 py-4 w-full rounded-md outline-none ring-primary-5 focus:ring-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* fetch Button */}
            <button className="w-full bg-primary-5 py-3 rounded-lg text-lg font-medium">
              Get Tokens
            </button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
