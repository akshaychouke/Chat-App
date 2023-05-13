import React from "react";
import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="Container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
