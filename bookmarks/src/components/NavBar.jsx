import React from "react";
import { useLogoutUserMutation } from "../services/userApi";
import { Link } from 'react-router-dom';
//import "/App.css"

function NavBar() {

const [logoutUser, {error}] = useLogoutUserMutation()

function handleLogout(e) {

  logoutUser()

}

  return(
  <nav id="bar">
    <ul id="navBar">
      <Link to="/signup">Signup</Link>
      <Link to="/">Login</Link>
      <Link to="/history">History</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to='/categories'>Categories</Link>
      <button onClick={handleLogout}>Logout</button>
    </ul>
  </nav>
  );
}

export default NavBar;
