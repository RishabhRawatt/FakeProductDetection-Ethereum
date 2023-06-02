import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import qrimg from "./qrcode1.png";
import "./checkauth.css";

const CheckAuth = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const handleScanButtonClick = () => {
    setIsScanning(true);
  };

  const handleScanResult = (result, error) => {
    if (!!result) {
      setData(result.text);
    }

    if (!!error) {
      console.info(error);
    }
  };

  const handleProductInfo = () => {
    if (!!data) {
      navigate(`/productinfo`,{state:{data:data}});
    }
  };

  return (
    <div className="outer-box">
    <div className="auth-main">
      <div className="top-main">
      <div className="auth-left">
        <h1 className="auth-h1">Scan Product Qr Code</h1>
        <p className="auth-desc" >Make sure to match product Qr with <br />product serial number to check genuinity</p>
      </div>
      <div className="auth-right">
        <img className="qr-img" src={qrimg} alt="" />
      </div>
      
    </div>
    <div className="product-box">
      <p className="product-id">{data}</p>
    </div>
    <div className="button-main">
      {!isScanning && (
        <button className="scan-btn" onClick={handleScanButtonClick}>Scan Qr</button>
        )}
      {isScanning &&(
        <>
        <QrReader className="qr-reader" onResult={handleScanResult}  />
        <button className="scan-btn"onClick={()=>setIsScanning(false)} >Stop Scan</button>
        </>
      )}
      <button className="owner-btn" onClick={handleProductInfo}>View product info</button>
    </div>
    </div>
    
    </div>
  );
};

export default CheckAuth;
