import React from "react";
import addImg from "../Images/addAvatar.png";
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWraper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <p>Don't have an account ? Register</p>
      </div>
    </div>
  );
};

export default Login;
