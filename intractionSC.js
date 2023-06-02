// 0x5f8dcd58163093545204089c0faeca39f6bd75b5

const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/4abbb168933d486181a2fcc8fbc97666`
);

const walletAddress = "0x6094d99649b5e40682e4994b85920ec96d3c4065";

const walletAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        internalType: "string",
        name: "productDesc",
        type: "string",
      },
    ],
    name: "addProduct",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "productId",
        type: "bytes32",
      },
    ],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "productId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "productId",
        type: "bytes32",
      },
    ],
    name: "ProductAdded",
    type: "event",
  },
  {
    inputs: [],
    name: "contractDeployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "productOwnership",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "productOwnershipHistory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "products",
    outputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "productId",
        type: "bytes32",
      },
    ],
    name: "showOwnershipHistory",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tempProductId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

//just to test the smartcontract 

const contractIntraction = async () => {
  const walletContract = new ethers.Contract(
    walletAddress,
    walletAbi,
    provider
  );
  const contractName = await walletContract.contractDeployer();
  console.log("Contract deployer:\n", contractName);

  const tempProductId = await walletContract.tempProductId();
  console.log("recent created pID:\n", tempProductId);

  const productCurrentOwner = await walletContract.productOwnership(
    "0x752ca760401b6fc4f5dff32f14c3f5ed54654d57198218e576e57a0b35cad931"
  );
  console.log("The Current owner of that product is:", productCurrentOwner);

  const showProductHistory = await walletContract.showOwnershipHistory(
    "0x752ca760401b6fc4f5dff32f14c3f5ed54654d57198218e576e57a0b35cad931"
  );
  console.log("The Current owner of that product is:", showProductHistory);
};

contractIntraction();

// const blockchainq= async()=>{
//     const block=await provider.getBlockNumber();
//     console.log(block);
// }

// blockchainq();
