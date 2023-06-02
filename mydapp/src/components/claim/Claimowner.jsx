import React from "react";
import "./claimowner.css";
import claimpng from "./claim.png";
import { ethers } from "ethers";
import { useState } from "react";
import { walletAbi, walletAddress } from "../../assets/data.js";

import { QrReader } from "react-qr-reader";

import Alert from "../Alert/Alert";

//test claimid temp for testing
//0x5dd95c98aff2e783a09348f600def0d5e4e476f71e85e9be91de86aab36544cd

const ClaimOwner = () => {
  const [claimId, setClaimId] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [claiming, setClaiming] = useState(false);

  //for alert prompts
  const [alertMsg, setAlertMsg] = useState("");
  const [alertvis, setAlertVis] = useState("hide");
  const [alertColor, setAlertColor] = useState("");

  const handleScanButtonClick = () => {
    setIsScanning(true);
  };

  const handleScanResult = (result, error) => {
    if (!!result) {
      setClaimId(result.text);
    }
    if (!!error) {
      console.log(error);
    }
  };

  function handleClaimIdChange(event) {
    setClaimId(event.target.value);
  }

  async function handleClaim() {
    try {
      setClaiming(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(walletAddress, walletAbi, signer);
      const tx = await contract.claimOwnership(claimId);
      setClaimId("");
      await tx.wait();
      console.log(tx);
      setAlertMsg("Product claimed successfully!");
      setAlertVis("showAlert");
      setAlertColor("green");
    } catch (error) {
      if (error.message.includes("This product already has an owner.")) {
        // alert(error);
        setAlertMsg("Error: This product already has an owner.");
        setAlertVis("showAlert");
        setAlertColor("yellow");
      } else if (
        error.message.includes("This product does not exist. you came Early")
      ) {
        setAlertMsg("Product is not valid (NOT CREATED)");
        setAlertVis("showAlert");
        setAlertColor("red");
      } else {
        alert(error);
      }
    } finally {
      setClaiming(false); // set claiming state to false to remove loading animation
    }
  }

  return (
    <>
      <Alert msg={alertMsg} visib={alertvis} color={alertColor} />
      <div className="claim-div">
        <div className="left">
          <img className="claimimg" src={claimpng} alt="" />
        </div>
        <div className="right-claim">
          <h1 className="heading-claim">Claim Ownership</h1>
          <div className="right-box">
            <div className="inputclaim">
              <div className="form__group field">
                <input
                  required=""
                  placeholder="Name"
                  class="form__field"
                  type="input"
                  value={claimId}
                  onChange={handleClaimIdChange}
                />
                <label class="form__label" for="name">
                  Enter Product id
                </label>
              </div>
            </div>
            <h3 className="claim-or">or</h3>

            {!isScanning && (
              <button
                onClick={handleScanButtonClick}
                className="scanid-button-claim"
              >
                Scan QR
              </button>
            )}

            {isScanning && (
              <>
                <button
                  className="scanid-button-claim"
                  onClick={() => setIsScanning(false)}
                >
                  Stop Scan
                </button>

                <QrReader
                  className="qr-reader-claim"
                  onResult={handleScanResult}
                />
              </>
            )}
            <button
              onClick={handleClaim}
              className="claim-button"
              disabled={claiming}
            >
              {claiming ? "Claiming..." : "claim"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClaimOwner;
