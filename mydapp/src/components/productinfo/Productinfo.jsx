import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ethers } from "ethers";
import "./productinfo.css";
import productinfoimg from "./productinfo.png";
import { walletAbi, walletAddress } from "../../assets/data.js";

const Productinfo = () => {
  const location = useLocation();
  const [PName, setPName] = useState("");
  const [PDescription, setPDescription] = useState("");
  const [PDate, setPDate] = useState("");
  const [productCurrentOwner, setProductCurrentOwner] = useState("");
  const [productOwnerHistory, setProductOwnerHistory] = useState([]);

  async function productDetails(data) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(walletAddress, walletAbi, signer);
      const productD = await contract.products(data);
      const productCurrentOwner = await contract.productOwnership(data);
      const productsOwnerHistory = await contract.showOwnershipHistory(data);
      setPName(productD.name);
      setPDescription(productD.description);
      //convert unix to date
      const date = new Date(productD.dateAdded * 1000);
      const din = date.toLocaleDateString("en-US");
      const samay = date.toLocaleTimeString("en-US");
      setPDate(din + " " + samay);
      setProductCurrentOwner(productCurrentOwner);
      setProductOwnerHistory(Array.from(productsOwnerHistory));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    productDetails(location.state.data);
  }, [location.state.data]);

  return (
    <div className="productinfo">
      <div className="pid-bar">
        <h1>Product ID-: {location.state.data}</h1>
      </div>
      <div className="productinfo-box">
        <div className="productinfo-elements">
          <div className="box-leftinfo">
            <h1>{PName}</h1>
            <p className="product-date">{PDate}</p>
            <span className="product-desc-heading">Description</span>
            <h2 className="product-desc">{PDescription}</h2>
          </div>

          <div className="box-right">
            <h2>PAST OWNERS</h2>
            {productOwnerHistory.map((owner, index) => (
              <h3 key={index}>{owner}</h3>
            ))}
          </div>
        </div>

        <div className="bottom-current">
          <h2>
            Current Owner:
            <br />
            {productCurrentOwner}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Productinfo;
