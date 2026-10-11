import { expect } from "chai";
import { network } from "hardhat";

describe("IncredibleStorage", function () {
  async function deployStorage(initialValue: bigint = 42n) {
    const { ethers } = await network.create();
    const storageFactory = await ethers.getContractFactory("IncredibleStorage");
    const storage = await storageFactory.deploy(initialValue);
    await storage.waitForDeployment();
    return storage;
  }

  it("stores the constructor value", async function () {
    const storage = await deployStorage();

    expect(await storage.get()).to.equal(42n);
  });

  it("updates and returns the stored value", async function () {
    const storage = await deployStorage();

    await storage.set(99n);

    expect(await storage.get()).to.equal(99n);
  });
});
