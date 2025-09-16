import Navbar from "./pages/Navbar";
import Mainroutes from "./Mainroutes";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  localStorage.setItem("set", "false");
  const value = localStorage.getItem("set") === "false";

  console.log(value);
  return value ? (
    <div>
      <Navbar /> <Mainroutes /> 
    </div>
  ) : (
    <div>
      <Login />
      
    </div>
  );
};

export default App;
