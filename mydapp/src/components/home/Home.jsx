import React from "react";
import "./home.css";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myprovider, walletAbi, walletAddress } from "../../assets/data.js";

import homepng from "./homepage.png";
import funfacts from "./random.js";


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    async function getWalletData() {
      if (typeof window.ethereum !== "undefined") {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          //to get contract deployer address
          const walletContract = new ethers.Contract(
            walletAddress,
            walletAbi,
            myprovider
          );
          const contractName = await walletContract.contractDeployer();
          setName(contractName);
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          setAddress(address);
          const balance = await provider.getBalance(address);
          setBalance(ethers.utils.formatEther(balance));
        } catch (error) {
          console.error(error);
        }
      }
    }
    getWalletData();
  }, []);

  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [contractName, setName] = useState("");

  const [funfact, setFunfact] = useState("");

  function addproductsfn() {
    navigate("/addproduct");
  }

  function checkauth() {
    navigate("/checkauth");
  }

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * funfacts.length);
    setFunfact(funfacts[randomIndex]);
  }, []);

  return (
    <div className="home-all">
      <div className="navbar">
        <div className="n-left">
          <a className="howwork" href="http://localhost:3000/howwork">
            How it works
          </a>
        </div>
        <div className="n-right">
          <span>Hello !</span>
          <span>
            wallet address: <b>{address}</b>
          </span>
          <span>
            <b>Balance</b>:{balance} ETH
          </span>
        </div>
      </div>

      <div className="main">
        <div className="main-main-left">
          <a className="nav-hov main-pown" href="{</TransferOwnership>}">
            Product Owns
          </a>
          <div className="rectangle rec-1"></div>
          <a
            className="nav-hov main-cown"
            href="http://localhost:3000/claimowner"
          >
            Claim Ownership
          </a>
          <div className="rectangle rec-2"></div>
          <a
            className="nav-hov main-cown"
            href="http://localhost:3000/transferowner"
          >
            Transfer Ownership
          </a>
        </div>

        <div className="main-main-right">
          <div className="main-left">
            <h1 className="main-left-h1">
              Don't Be Fooled by Fakes - Our Counterfeit Detection System Have
              Got You Covered!
            </h1>
            <p className="main-left-desc">
              Our counterfeit detection services are designed to protect you
              from the damaging effects of fake products. With our fake product
              detection, you can rest assured that you will receive the most
              comprehensive and effective solutions for detecting counterfeit
              products. Don't let counterfeiters fool you - let us help you stay
              one step ahead and protect yourself now!
            </p>
            <div className="main-actions">
              <button onClick={addproductsfn} className="main-addproduct">
                Add Product
              </button>
              <button onClick={checkauth} className="main-checkauth">
                Check Authenticity
              </button>
            </div>
          </div>
          <div className="main-right">
            <img className="home-img" src={homepng} alt="" />
          </div>
        </div>
      </div>
      <div className="footer">
        <span className="did-you">Did you know:-</span>
        <span>{funfact}</span>
      </div>
    </div>
  );
};

export default Home;
