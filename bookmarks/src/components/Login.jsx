import React from "react";
import { useState } from "react";

function Login({

    nickname,
    setNickname,
    email,
    setEmail,
    password,
    setPassword
}) {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const {email, password} = formData

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      
      email,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((resp) => {
      if (resp.status === 201) {
        resp.json().then((user) => setUser(user));
        console.log("Users post status 201");
      } else {
        resp.json().then(console.log("no 201 status"));
      }
    });
  }

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div></div>
      <label>Username </label>
      <input
        placeholder="Username (email)"
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <div></div>
      <label>Password </label>
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <div></div>
      <input type="submit" value="Login" />
    </form>
  </div>
  )
}

export default Login;
