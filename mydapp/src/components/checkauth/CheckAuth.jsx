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
    // <div className="container-1">
    //   <div className="circle"></div>
    //   <img className="qr-img" src={qrimg} alt="" srcset="" />
    //   <h1 className="qr-text">SCAN PRODUCT QR</h1>

    //   {!isScanning && (
    //     <button className="scan-btn" onClick={handleScanButtonClick}>
    //       Scan QR Code
    //     </button>
    //   )}
    //   {isScanning && (
    //     <>
    //       <QrReader onResult={handleScanResult} style={{ width: "100%" }} />

    //       <button className="scan-btn" onClick={() => setIsScanning(false)}>
    //         Stop Scanning
    //       </button>

    //       <button className="scan-btn" onClick={handleProductInfo}>
    //         Go to Product Info
    //       </button>
    //     </>
    //   )}

    //   <h3>Scanned code is: {data}</h3>
    // </div>
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

    
      // <div className="container-1">
    //   <div className="circle"></div>
    //   <img className="qr-img" src={qrimg} alt="" srcset="" />
    //   <h1 className="qr-text">SCAN PRODUCT QR</h1>

    //   {!isScanning && (
    //     <button className="scan-btn" onClick={handleScanButtonClick}>
    //       Scan QR Code
    //     </button>
    //   )}
    //   {isScanning && (
    //     <>
    //       <QrReader onResult={handleScanResult} style={{ width: "100%" }} />

    //       <button className="scan-btn" onClick={() => setIsScanning(false)}>
    //         Stop Scanning
    //       </button>

    //       <button className="scan-btn" onClick={handleProductInfo}>
    //         Go to Product Info
    //       </button>
    //     </>
    //   )}

    //   <h3>Scanned code is: {data}</h3>
    // </div>
  );
};

export default CheckAuth;
