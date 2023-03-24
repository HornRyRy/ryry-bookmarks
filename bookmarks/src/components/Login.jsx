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

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      nickname,
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
        onChange={(e) => setEmail(e.target.value)}
      />
      <div></div>
      <label>Password </label>
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div></div>
      <input type="submit" value="Register" />
    </form>
  </div>
  )
}

export default Login;
