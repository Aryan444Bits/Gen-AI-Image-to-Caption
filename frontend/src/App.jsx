import React from "react";
import Login from "./authUI/Create";
import Headbar from "./Headbar";
const App = () => {
  return (
    <div className=" relative pt-30 h-screen w-screen bg-gray-200 ">
      <Headbar />
      <Login />
    </div>
  );
};

export default App;
