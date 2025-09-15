import {mainAxios,authAxios} from "../api/axios.config"
import { useState } from "react";

const Chat = () => {
  const [name, setname] = useState(null)
  const [id, setid] = useState(null)
  const helo = async function main() {
  //   // Like the browser fetch API, the default method is GET
  //   const response = await fetch("http://localhost:3000/api/auth/login?username=Aryan&password=hello");
  //   const data = await response.json();
  //   console.log(data);

  try {
    const {data} = await mainAxios.get('/api/auth/login?username=Aryan&password=hello')
    console.log(data)
    setname(data.user.username)
    setid(data.user._id)
  } catch (error) {
    console.log(error)
  }
}
  
  return (
    <div className="">
      <h1>Name| {name}</h1>
      <h2>_id|  {id}</h2>
      <button className="bg-gray-800 outline-0 text-red-500 p-2 flex transform-gpu " onClick={helo}>submit</button>
    </div>
  );
};

export default Chat;
