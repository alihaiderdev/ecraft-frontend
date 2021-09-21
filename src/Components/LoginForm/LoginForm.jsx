import React, { useState } from "react";
import {connect} from 'react-redux'
import {login} from "./../../Redux/auth/authActions"

const LoginForm = ({login}) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  const hanldeSubmit = (e) => {
    e.preventDefault();
    login({email, password})
  };
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

const actions = {
    login
}

export default connect(null,actions)(LoginForm);
