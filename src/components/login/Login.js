import React, { useState } from "react"
import "./Login.css"

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: ""});

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    props.setUser(credentials)

    props.history.push("/posts");
  }

  return (
    <form onSubmit={handleLogin}>
      <fieldset className="login">
        <h3>Hello, please sign in!</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="email"
          id="email"
          placeholder="Email Address"
          required="" autoFocus="" />
          <label htmlFor="inputEmail">Email Address</label>

          <input onChange={handleFieldChange} type="password"
          id="password"
          placeholder="Password"
          required="" />

          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Login;