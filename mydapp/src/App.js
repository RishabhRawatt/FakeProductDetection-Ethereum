import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./components/login/Login.jsx";
import Home from "./components/home/Home.jsx";
import AddProductForm from "./components/addproduct/Addproducts";
import ClaimOwner from "./components/claim/Claimowner";
import TransferOwnership from "./components/transfer/Transfer";
import CheckAuth from "./components/checkauth/CheckAuth";
import Productinfo from "./components/productinfo/Productinfo";
import HowWork from "./components/howWork/HowWork";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addproduct" element={<AddProductForm />} />
        <Route path="/claimowner" element={<ClaimOwner />} />
        <Route path="/transferowner" element={<TransferOwnership />} />
        <Route path="/checkauth" element={<CheckAuth />} />
        <Route path="/Productinfo" element={<Productinfo />} />
        <Route path="/howwork" element={<HowWork />} />
      </Routes>
    </>
  );
}
export default App;

//temp abp for smartcontact

// useEffect(() => {

//   const walletAbi =[
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "productName",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "productDesc",
//           "type": "string"
//         }
//       ],
//       "name": "addProduct",
//       "outputs": [
//         {
//           "internalType": "bytes32",
//           "name": "",
//           "type": "bytes32"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "bytes32",
//           "name": "productId",
//           "type": "bytes32"
//         }
//       ],
//       "name": "claimOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "bytes32",
//           "name": "productId",
//           "type": "bytes32"
//         },
//         {
//           "internalType": "address",
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "transferOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "internalType": "bytes32",
//           "name": "productId",
//           "type": "bytes32"
//         }
//       ],
//       "name": "ProductAdded",
//       "type": "event"
//     },
//     {
//       "inputs": [],
//       "name": "contractDeployer",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "bytes32",
//           "name": "",
//           "type": "bytes32"
//         }
//       ],
//       "name": "productOwnership",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "bytes32",
//           "name": "",
//           "type": "bytes32"
//         },
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "name": "productOwnershipHistory",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "bytes32",
//           "name": "",
//           "type": "bytes32"
//         }
//       ],
//       "name": "products",
//       "outputs": [
//         {
//           "internalType": "bytes32",
//           "name": "id",
//           "type": "bytes32"
//         },
//         {
//           "internalType": "string",
//           "name": "name",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "description",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "bytes32",
//           "name": "productId",
//           "type": "bytes32"
//         }
//       ],
//       "name": "showOwnershipHistory",
//       "outputs": [
//         {
//           "internalType": "address[]",
//           "name": "",
//           "type": "address[]"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "tempProductId",
//       "outputs": [
//         {
//           "internalType": "bytes32",
//           "name": "",
//           "type": "bytes32"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     }
//   ];

//   // const writeContract=async()=>{
//   //   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   //   await provider.send("eth_requestAccounts",[]);
//   //   const signer=provider.getSigner();
//   //   const contract=new ethers.Contract(walletAddress,walletAbi,signer);
//   //   await contract.setValue(2);
//   // }
//   // writeContract();
// },[])

// const walletAbi =[
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "productName",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "productDesc",
//         "type": "string"
//       }
//     ],
//     "name": "addProduct",
//     "outputs": [
//       {
//         "internalType": "bytes32",
//         "name": "",
//         "type": "bytes32"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes32",
//         "name": "productId",
//         "type": "bytes32"
//       }
//     ],
//     "name": "claimOwnership",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes32",
//         "name": "productId",
//         "type": "bytes32"
//       },
//       {
//         "internalType": "address",
//         "name": "newOwner",
//         "type": "address"
//       }
//     ],
//     "name": "transferOwnership",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "internalType": "bytes32",
//         "name": "productId",
//         "type": "bytes32"
//       }
//     ],
//     "name": "ProductAdded",
//     "type": "event"
//   },
//   {
//     "inputs": [],
//     "name": "contractDeployer",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes32",
//         "name": "",
//         "type": "bytes32"
//       }
//     ],
//     "name": "productOwnership",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes32",
//         "name": "",
//         "type": "bytes32"
//       },
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "productOwnershipHistory",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes32",
//         "name": "",
//         "type": "bytes32"
//       }
//     ],
//     "name": "products",
//     "outputs": [
//       {
//         "internalType": "bytes32",
//         "name": "id",
//         "type": "bytes32"
//       },
//       {
//         "internalType": "string",
//         "name": "name",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "description",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes32",
//         "name": "productId",
//         "type": "bytes32"
//       }
//     ],
//     "name": "showOwnershipHistory",
//     "outputs": [
//       {
//         "internalType": "address[]",
//         "name": "",
//         "type": "address[]"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "tempProductId",
//     "outputs": [
//       {
//         "internalType": "bytes32",
//         "name": "",
//         "type": "bytes32"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ];
