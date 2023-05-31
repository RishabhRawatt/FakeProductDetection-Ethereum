import { useState } from "react";
import { ethers } from "ethers";
import { myprovider, walletAbi, walletAddress } from "../../assets/data.js";
import QRcode from "qrcode";

import Alert from "../Alert/Alert.jsx";

import addimg from "./addproduct.png";

import "./Addproduct.css";

const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  // const [tempItem, setTempProduct] = useState("");
  // const [tempItem, setTempProduct] = useState("");

  const [adding, setAdding] = useState(false);
  const [imgUrl, setImageUrl] = useState("");

  //for alert prompts
  const [alertMsg, setAlertMsg] = useState("");
  const [alertvis, setAlertVis] = useState("hide");
  const [alertColor, setAlertColor] = useState("");

  function handleProductNameChange(event) {
    setProductName(event.target.value);
    // setProductNameValid(event.target.value !== '');
  }

  function handleProductDescriptionChange(event) {
    setProductDescription(event.target.value);
    // setProductDescriptionValid(event.target.value !== '');
  }

  function checkblank() {
    if (productName === "" || productDescription === "") {
      setAlertMsg("please fill the details !!");
      setAlertVis("showAlert");
      setAlertColor("yellow");
      //  alert("fill it");
    } else {
      handleAddProductClick();
    }
  }

  async function handleAddProductClick() {
    try {
      setAdding(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(walletAddress, walletAbi, signer);
      const tx = await contract.addProduct(productName, productDescription);
      await tx.wait();
      const tempItem = await contract.tempProductId();
      try {
        const respose = await QRcode.toDataURL(tempItem);
        setImageUrl(respose);
        console.log("QR code generated");
      } catch (error) {
        console.log(error);
      }
      setProductName("");
      setProductDescription("");
      alert("Product added successfully!", tx);
      setAlertMsg("Product added successfully!");
      setAlertVis("showAlert");
      setAlertColor("green");
      console.log(tx);
    } catch (error) {
      if (
        error.message.includes(
          "Only the contract deployer can add new products"
        )
      ) {
        setAlertMsg("Only the contract deployer can add new products");
        setAlertVis("showAlert");
        setAlertColor("red");
      } else {
        console.log(error);
        // setAlertMsg(error.message);
        alert(error.message);
      }
    } finally {
      setAdding(false);
    }
  }

  return (
    <div className="addproduct-body">
      <div className="alert-msg">
        <Alert msg={alertMsg} visib={alertvis} color={alertColor} />
      </div>
      <div className="main-div">
        <div className="left">
          <img src={addimg} alt="addimg" />
        </div>

        <div className="right">
          <h1 className="heading-add">Add Product</h1>
          <div className="right-box">
            <div className="inputadd">
              <div className="form__group field">
                <input
                  required
                  placeholder="Product Name"
                  className="form__field"
                  value={productName}
                  onChange={handleProductNameChange}
                  type="input"
                />
                <label className="form__label" for="name">
                  Product Name
                </label>
              </div>
              <br />
              <div className="form__group field">
                <input
                  required
                  placeholder="Product Description"
                  className="form__field"
                  value={productDescription}
                  onChange={handleProductDescriptionChange}
                  type="input"
                />
                <label className="form__label" for="name">
                  Description
                </label>
              </div>
            </div>

            <button
              onClick={checkblank}
              className="add-button"
              disabled={adding}
            >
              {adding ? "Adding..." : "Add"}
            </button>
            <p style={{ textAlign: "center" }}>Qr will show up below </p>
            {imgUrl ? (
              <a href={imgUrl} download>
                <img className="qr-code" src={imgUrl} alt="img" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
