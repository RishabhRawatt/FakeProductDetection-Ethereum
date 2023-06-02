import React, { useState } from "react";
import "./transfer.css";
import { ethers } from "ethers";
import tansferpng from "./transfer.png";
import { QrReader } from "react-qr-reader";

import Alert from "../Alert/Alert.jsx";

import { myprovider, walletAbi, walletAddress } from "../../assets/data.js";

const TransferOwnership = () => {
  const [alertMsg, setAlertMsg] = useState("");
  const [alertvis, setAlertVis] = useState("hide");
  const [alertColor, setAlertColor] = useState("");

  const [isScanning, setIsScanning] = useState(false);
  const [transferring, setTransferring] = useState(false);

  const [productId, setProductId] = useState("");
  const [WalletId, setWalletId] = useState("");

  const handleScanButtonClick = () => {
    setIsScanning(true);
  };

  const handleScanResult = (result, error) => {
    if (!!result) {
      setProductId(result.text);
    }
    if (!!error) {
      console.log(error);
    }
  };

  function checkblank() {
    if (productId === "" || WalletId === "") {
      setAlertMsg("please fill the details !!");
      setAlertVis("showAlert");
      setAlertColor("yellow");
    } else {
      handleTrasfer();
    }
  }

  function handleProductIdChange(event) {
    setProductId(event.target.value);
  }
  function handleWalletIdChange(event) {
    setWalletId(event.target.value);
  }

  async function handleTrasfer() {
    try {
      setTransferring(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(walletAddress, walletAbi, signer);
      const tx = await contract.transferOwnership(productId, WalletId);
      setProductId("");
      setWalletId("");
      await tx.wait();
      console.log(tx);
      setAlertMsg("Product transferred successfully!");
      setAlertVis("showAlert");
      setAlertColor("green");
    } catch (error) {
      if (
        error.message.includes("Only the current owner can transfer ownership")
      ) {
        setAlertMsg("YOU ARE NOT AN OWNER!!");
        setAlertVis("showAlert");
        setAlertColor("red");
      } else {
        alert(error);
      }
    } finally {
      setTransferring(false);
    }
  }

  return (
    <div className="main-transfer">
      <div className="alert-msg">
        <Alert msg={alertMsg} visib={alertvis} color={alertColor} />
      </div>

      <div className="left">
        <img className="transferimg" src={tansferpng} alt="" />
      </div>
      <div className="right-transfer">
        <h1 className="heading-transfer">Transfer Ownership</h1>
        <div className="right-box">
          <div className="input-transfer">
            <div className="form__group field">
              <input
                required=""
                placeholder="Product ID"
                className="form__field"
                type="input"
                value={productId}
                onChange={handleProductIdChange}
              />
              <label class="form__label" for="name">
                Enter Product id
              </label>
            </div>

            <h3 className="transfer-or">or</h3>

            {!isScanning && (
              <button
                onClick={handleScanButtonClick}
                className="scanid-button-transfer"
              >
                Scan QR
              </button>
            )}

            {isScanning && (
              <>
                <button
                  className="scanid-button-transfer"
                  onClick={() => setIsScanning(false)}
                >
                  Stop Scan
                </button>

                <QrReader
                  className="qr-reader-transfer"
                  onResult={handleScanResult}
                />
              </>
            )}
            <div className="form__group field">
              <input
                required=""
                placeholder="wallet add"
                className="form__field"
                type="input"
                value={WalletId}
                onChange={handleWalletIdChange}
              />
              <label class="form__label" for="name">
                Enter Wallet Add
              </label>
            </div>

            <button
              onClick={checkblank}
              className="transfer-button"
              disabled={transferring}
            >
              {transferring ? "Transferring..." : "Transfer"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferOwnership;
