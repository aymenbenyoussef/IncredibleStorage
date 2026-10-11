import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const IncredibleStorageModule = buildModule("IncredibleStorageModule", (module) => {
  const incredibleStorage = module.contract("IncredibleStorage", [42n]);

  return { incredibleStorage };
});

export default IncredibleStorageModule;
