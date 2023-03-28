import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAutoLoginQuery } from "./services/userApi";
import Navbar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  const { data: userRedux = null, isFetching } = useAutoLoginQuery();
  //24:51 how to incorporate user?

  console.log(userRedux);

  return (
    <div className="App">
      <Navbar />
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
