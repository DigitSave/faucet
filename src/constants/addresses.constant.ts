import { Token } from "../@types/assets.types";

export interface Network {
    name: string, 
    id: number,
    ticker: string
}

export const networks:Network[] = [
    { name: "Asset Chain Testnet", id: 42421, ticker: "/images/networks/assetchain.jpg" },
    { name: "Base Sepolia", id: 84532, ticker: "/images/networks/base.png" },
  ];

  export const useChainUrl = (chainId:number): {chainUrl:string} => {  
    const chainUrl: string =
      chainId === 84532
        ? "sepolia.basescan.org"
        : chainId === 42421
        ? "scan-testnet.assetchain.org"
        : "scan-testnet.assetchain.org";
  
  
    return {chainUrl};
  };


export interface TokensArray {
    [key: number]: Token[];
}


export const tokens : TokensArray = {
    // AssetChain
    42421: [
        {
            name: "USDT",
            ticker: "/images/tickers/usdt.png",
            decimal: 18,
            fullName : "Tether",
            contractAddrs: '0xb47Eda1D52C6c09dCa6F83Acd7E3eCA576f000dC'
        },
       {
            name: "BTC",
            ticker: "/images/tickers/bitcoin.png",
            decimal: 18,
            fullName : "Bitcoin",
            contractAddrs: '0x94FA6257c3B182D71f88B85294B5C771451B7a69'
        },
       {
            name: "ETH",
            ticker: "/images/tickers/ethereum.png",
            decimal: 18,
            fullName : "Ethereum",
            contractAddrs: '0x870954612eb55232423760593eE3A1d283aC7B93'
        },
       {
            name: "LINK",
            ticker: "/images/tickers/link.png",
            decimal: 18,
            fullName : "Link",
            contractAddrs: '0x98F3bc937aB52d5B54BF4eBD7BaB8746eC14A159'
        },
       {
            name: "USDC",
            ticker: "/images/tickers/usdc.png",
            decimal: 18,
            fullName : "USD Coin",
            contractAddrs: '0x46Be9CcF941a8dEb257d7F29c72e06871139Fc7e'
        },
    ],
    // Base Sepolia
    84532: [
        {
            name: "USDT",
            ticker: "/images/tickers/usdt.png",
            decimal: 18,
            fullName : "Tether",
            contractAddrs: '0xf6994372B14e886d2621619be33E67a1Ef19265c'
        },
       {
            name: "BTC",
            ticker: "/images/tickers/bitcoin.png",
            decimal: 18,
            fullName : "Bitcoin",
            contractAddrs: '0x3fa08A4F1D647E105514AFd65510C3CB0837397c'
        },
       {
            name: "ETH",
            ticker: "/images/tickers/ethereum.png",
            decimal: 18,
            fullName : "Ethereum",
            contractAddrs: '0x64E81a223979911AeDfF3AF96DBDa8aC7355dead'
        },
       {
            name: "LINK",
            ticker: "/images/tickers/link.png",
            decimal: 18,
            fullName : "Link",
            contractAddrs: '0x882066bB344b59b3b072a7F17caE7582FA4Bf660'
        },
       {
            name: "USDC",
            ticker: "/images/tickers/usdc.png",
            decimal: 18,
            fullName : "USD Coin",
            contractAddrs: '0xc6ceA2518610e6C0D9bF199F7B4692408649d10E'
        },
    ],

}