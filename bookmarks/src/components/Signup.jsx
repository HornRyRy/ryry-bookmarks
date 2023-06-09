import React from "react";
import { useState } from "react";
import { useCreateUserMutation } from "../services/userApi";

function Signup({})

{
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // object, 2nd argument, as error for now. eg, isfetching, isLoading, etc
  const [createUser, {error}] = useCreateUserMutation()


  function handleSubmit(e) {
    e.preventDefault();
    
    const user = {
      nickname,
      email,
      password,
    };
    createUser(user)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Signup Here</h2>
        <div></div>
        <label>Name </label>
        <input
          placeholder="App will call you by this"
          type="text"
          name="name"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
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
  );
}

export default Signup;
