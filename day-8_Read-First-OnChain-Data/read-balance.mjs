import { address, devnet, createSolanaRpc } from "@solana/kit";

// connect to devnet
const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));

// wallet address
const targetAddress = address("Acx1DZLuStzQRCETVzDfxAukneKntffUUCBe7GNzHp9f");

// query the balance, just like calling the API
const {value: balanceInLamports } = await rpc.getBalance(targetAddress).send();

const balanceInSol = Number(balanceInLamports)/1_000_000_000;

console.log(`Address: ${targetAddress}`);
console.log(`Balance: ${balanceInSol} SOL`);