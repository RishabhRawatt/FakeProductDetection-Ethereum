import React from "react";
import "./home.css";
import homepng from "./homepage.png";
const Home1 = () => {


  return (
    <div className="home-all">
      <div className="navbar">
        <div className="n-left">
          <button className="howwork">How it works</button>
        </div>
        <div className="n-right">
          <span>Hello !</span>
          <span>wallet address{address}</span>
        </div>
      </div>

      <div className="main">
        <div className="main-main-left">
          {/* <p className="main-pown">Product Owns</p> */}
          <a className="main-pown" href="{</TransferOwnership>}">Product Owns</a>
          <div className="rectangle rec-1"></div>
          {/* <p className="main-cown">Claim Ownership</p> */}
          <a className="main-cown" href="http://localhost:3000/claimowner">Product Owns</a>
          <div className="rectangle rec-2"></div>
          <p className="main-town">Transfer Ownership</p>
          <a className="main-cown" href="http://localhost:3000/transferowner">Product Owns</a>
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
              <button onClick={addproductsfn} className="main-addproduct">Add Product</button>
              <button onClick={checkauth} className="main-checkauth">Check Authenticity</button>
            </div>
          </div>
          <div className="main-right">
            <img className="home-img" src={homepng} alt="" />
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Did you know :- wuefweiuofhwie</p>
      </div>
    </div>
  );
};

export default Home1;
