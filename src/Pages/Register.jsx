import React from "react";
import addImg from "../Images/addAvatar.png";
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWraper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          <label htmlFor="fileInput"><img src={addImg}/><span>Add Your Profile Image</span></label>
          <button>Sign UP</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
