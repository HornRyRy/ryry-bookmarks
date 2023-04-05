import { useState } from "react";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAutoLoginQuery } from "./services/userApi";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  const { data: userRedux = null, isFetching } = useAutoLoginQuery();
  //24:51 how to incorporate user?

  console.log(userRedux);

  return (
    <div className="App">
      <NavBar />
      <div>
        <p>Hello there</p>
      </div>
      <div>
        <Signup />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
