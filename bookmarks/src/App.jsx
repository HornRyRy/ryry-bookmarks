import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAutoLoginQuery } from "./services/userApi";


function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null)

  const {data: userRedux = null, isFetching} = useAutoLoginQuery()
  //24:51 how to incorporate user?

  console.log(userRedux)

  return (
    <div className="App">
      
      <div className="card">


      </div>
      <div>
        <p>hi</p>
        <div>
          <Signup />
        </div>
        <div>
          hello there
        <Login />
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default App;
