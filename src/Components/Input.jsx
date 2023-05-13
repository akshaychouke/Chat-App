import React from "react";
import Img from "../Images/img.png";
import attach from "../Images/attach.png";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something" />
      <div className="send">
        <img src={attach}></img>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img}></img>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
