import React from "react";
import "./Alert.css";

const Alert = (props) => {
  const { msg, visib,color } = props;

  

const handleclick = () => {

  const buttonclick = document.querySelector(".alert");
   buttonclick.classList.add("hide");
  //  buttonclick.classList.remove("hide");

}

  return (
    <div>
      <div className={`alert ${visib} ${color}`}>
        <span className="fas fa-exclamation-circle"></span>
        <span className="msg">{msg}</span>
        <div className="close-btn" onClick={handleclick}>
          <span className="fas fa-times">❌</span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
