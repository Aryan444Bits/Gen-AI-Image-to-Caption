import React from "react";
import SignUp from "./authUI/SignUp";
import Headbar from "./Headbar";
const App = () => {
  return (
    <div className=" relative pt-30 h-screen w-screen bg-gray-200 ">
      <Headbar />
      <SignUp />
    </div>
  );
};

export default App;
