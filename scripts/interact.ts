import { readFile } from "node:fs/promises";
import { network } from "hardhat";

type Deployment = {
  "IncredibleStorageModule#IncredibleStorage": string;
};

const deploymentFile = new URL(
  "../ignition/deployments/chain-31337/deployed_addresses.json",
  import.meta.url,
);

const deployment = JSON.parse(
  await readFile(deploymentFile, "utf8"),
) as Deployment;

const contractAddress = deployment["IncredibleStorageModule#IncredibleStorage"];
const requestedValue = process.env.NEW_VALUE;
const { ethers } = await network.create({ network: "localhost" });
const storage = await ethers.getContractAt("IncredibleStorage", contractAddress);

console.log(`Contract: ${contractAddress}`);
console.log(`Current value: ${(await storage.get()).toString()}`);

if (requestedValue !== undefined) {
  if (!/^\d+$/.test(requestedValue)) {
    throw new Error("NEW_VALUE must be a non-negative integer.");
  }

  const transaction = await storage.set(BigInt(requestedValue));
  await transaction.wait();
  console.log(`Updated value: ${(await storage.get()).toString()}`);
}
