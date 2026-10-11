# IncredibleStorage - Solidity Smart Contract Project

> A simple Ethereum smart contract project built with Solidity and Hardhat 3 for storing and updating an unsigned integer on-chain.

## Project overview

**IncredibleStorage** is a beginner-friendly smart contract that demonstrates the core lifecycle of an Ethereum contract:

- initialize persistent state through a constructor;
- read state using a `view` function;
- update state through a public transaction;
- compile, test, deploy, and interact with the contract locally.

The contract stores a private `uint256` value called `awesomeUInt`. Its default local deployment value is `42`, and the value can be updated to another non-negative integer.

## Features

- Solidity `^0.8.24` contract implementation
- Hardhat 3 development environment
- Hardhat Ignition deployment module
- Automated tests using Mocha, Chai, and Ethers
- Local JSON-RPC deployment and interaction workflow
- TypeScript configuration and scripts

## Technology stack

- [Solidity](https://soliditylang.org/)
- [Hardhat 3](https://hardhat.org/)
- [Ethers.js](https://docs.ethers.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)

## Smart contract API

The [`IncredibleStorage`](./contracts/IncredibleStorage.sol) contract exposes:

| Function | Description |
| --- | --- |
| `constructor(uint256 initialValue)` | Initializes the stored value. |
| `get()` | Returns the current stored value without modifying the blockchain. |
| `set(uint256 value)` | Updates the stored value through a blockchain transaction. |

## Project structure

```text
.
├── contracts/
│   └── IncredibleStorage.sol       # Smart contract
├── ignition/
│   └── modules/
│       └── IncredibleStorage.ts    # Hardhat Ignition deployment module
├── scripts/
│   └── interact.ts                 # Read and optionally update the local contract
├── test/
│   └── IncredibleStorage.ts        # Contract tests
├── hardhat.config.ts               # Hardhat configuration
└── package.json                    # Project scripts and dependencies
```

## Prerequisites

- Node.js 20 or later
- npm

## Installation

Clone the repository, open a terminal in the project directory, and install the dependencies:

```bash
npm install
```

## Compile the contract

```bash
npm run build
```

## Run the tests

```bash
npm test
```

The test suite verifies that:

- the constructor stores the initial value correctly;
- the `set` function updates the value;
- the `get` function returns the updated value.

## Deploy locally

Start a local Hardhat JSON-RPC node in one terminal:

```bash
npx hardhat node
```

In a second terminal, deploy the contract with an initial value of `42`:

```bash
npm run deploy:local
```

The local blockchain is available at:

```text
http://127.0.0.1:8545/
```

The accounts and private keys printed by Hardhat are intended for local development only. Never use them on a public or production network.

## Interact with the deployed contract

Read the current value:

```bash
npm run interact:local
```

To update the value from PowerShell, set the `NEW_VALUE` environment variable before running the interaction script:

```powershell
$env:NEW_VALUE = "99"
npm run interact:local
Remove-Item Env:NEW_VALUE
```

The script prints the contract address, the current value, and the updated value after the transaction is confirmed.

## Available npm scripts

| Command | Description |
| --- | --- |
| `npm run build` | Compile the Solidity contracts. |
| `npm test` | Run the automated test suite. |
| `npm run deploy:local` | Deploy `IncredibleStorage` to the local Hardhat network. |
| `npm run interact:local` | Read or update the locally deployed contract. |

## License

This project uses the GPL-3.0 license identifier declared in the smart contract.
