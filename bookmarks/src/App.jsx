import { useState } from "react";
import { useAutoLoginQuery } from "./services/userApi";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Signup from "./components/Signup";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import HistoryList from "./components/HistoryList";
import Favorites from "./components/Favorites";

import Categories from "./components/Categories";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  

  const { data: userRedux = null, isFetching } = useAutoLoginQuery();
  //24:51 how to incorporate user?

  console.log(userRedux);

  return (
    <div className="App">
      <h1>Ryry's Bookmarks</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/history" element={<HistoryList />} />
        <Route path="/categories" element={<Categories  />} />
        <Route path="/favorites" element={<Favorites  />} />
      </Routes>
    </div>
  );
}

export default App;
