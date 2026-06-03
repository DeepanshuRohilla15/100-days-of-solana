// Step 1

// import { generateKeyPairSigner } from "@solana/kit";

// // Generate a brand new keypair
// const wallet = await generateKeyPairSigner();

// console.log("Your new wallet address:", wallet.address);
// console.log(
//   "\nThis address is your public key. It's safe to share."
// );
// console.log(
//   "The private key stays in memory. In a real app, you'd save it securely."
// );

// Step 2

import {
  generateKeyPairSigner,
  createSolanaRpc,
  devnet,
} from "@solana/kit";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
const wallet = await generateKeyPairSigner();

console.log("Wallet address:", "5SpJmcciWipQd44x63JsKFCrKJNfbveAgfWuDnQ9P1on");
console.log("\n--- Go to https://faucet.solana.com/ and airdrop SOL to this address ---");
console.log("--- Then run this script again with the same address to check the balance ---\n");

// To check a specific address you've already funded, replace the line below:
// const { value: balance } = await rpc.getBalance(address("YOUR_ADDRESS_HERE")).send();
const { value: balance } = await rpc.getBalance(wallet.address).send();
const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance: ${balanceInSol} SOL`);