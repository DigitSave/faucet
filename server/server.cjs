// server.js
const express = require('express');
const dotenv = require('dotenv');
const ethers = require('ethers');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000; // or any port you prefer

app.post('/api/transfer', async (req, res) => {
  try {
    const { walletAddress, tokenAddress, chain, decimal } = req.body;

    const privateKey = process.env.PRIVATE_KEY;
    if (!privateKey) {
      throw new Error('Private key not found in environment variables');
    }

      // Signer (replace privateKey with the actual key)
      
const provider = ethers.getDefaultProvider(
    chain === 84532
    ? "https://base-sepolia-rpc.publicnode.com"
    : "https://enugu-rpc.assetchain.org	"
);
    const signer = new ethers.Wallet(privateKey, provider);

    const tokenContract = new ethers.Contract(
        tokenAddress,
        [
          // Minimal ERC20 ABI to transfer tokens
          "function transfer(address to, uint amount) returns (bool)",
        ],
        signer
      );

      // Amount to transfer (replace with actual value you want to send)
      const amountToSend = ethers.parseUnits("10", decimal); // 10 tokens as an example

      // Transfer tokens
      const tx = await tokenContract.transfer(walletAddress, amountToSend);
      await tx.wait(); // Wait for the transaction to be mined
   


    res.json({ success: true, txHash: tx.hash });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Token transfer failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
