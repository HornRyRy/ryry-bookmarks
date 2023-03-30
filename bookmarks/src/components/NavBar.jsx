import React from "react";
import { useLogoutUserMutation } from "../services/userApi";
//import "/App.css"

function NavBar() {

const [logoutUser, {error}] = useLogoutUserMutation()

function handleLogout(e) {

  logoutUser()

}

  return(
  <nav>
    <ul id="navBar">
      <button onClick={handleLogout}>Logout</button>
    </ul>
  </nav>
  );
}

export default NavBar;
