import { useState, useEffect } from "react";
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
  
  const [user, setUser] = useState(null);
  const [userCategories, setUserCategories] = useState([]);

  

  function updateCatState(newState){
    setUserCategories([...userCategories, newState])
  }


  const { data: userRedux = null, isFetching } = useAutoLoginQuery();
  //24:51 how to incorporate user?

  console.log(userRedux);


  // GET Categories
  //this useEffect should be in App and should send down to favs/categories

  useEffect(() => {
    fetch(`api/galleries`).then((res) => {
      if (res.ok) {
        res.json().then((data) => setUserCategories(data));
        console.log("galleries/categories fetch");
      } else {
        console.log("errors -galleries/categories fetch");
        // res.json().then(json => setErrors(json["errors"]))
      }
    });
  }, []);


    // GET Favorites

    function updateFavState(newState){
      setMyFavorites([...myFavorites, newState])
    }
  
    const [myFavorites, setMyFavorites] = useState([])
  
    useEffect(() => {
      fetch(`api/favorites`).then((res) => {
        if (res.ok) {
          res.json().then((data) => setMyFavorites(data));
          console.log("favorites fetch")
          
        } else {
          console.log("errors -favorites fetch");
          // res.json().then(json => setErrors(json["errors"]))
        }
      });
    }, []);


  return (
    <div className="App">
      <h1>Ryry's Bookmarks</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/history" element={<HistoryList />} />
        <Route path="/categories" element={<Categories setUserCategories={setUserCategories} userCategories={userCategories} updateCatState={updateCatState} />} />
        <Route path="/favorites" element={<Favorites userCategories={userCategories} setUserCategories={setUserCategories} updateCatState={updateCatState} myFavorites={myFavorites} setMyFavorites={setMyFavorites} />} />
      </Routes>
    </div>
  );
}

export default App;
