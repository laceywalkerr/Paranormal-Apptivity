import React, { useState, useEffect } from "react"
import UserManager from "../../modules/UserManager"
import "./Login.css"


const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "", userId: 0 });
//   const [users, setUsers] = useState([])

//   useEffect (() => {
//     UserManager.GetAll("users")
//     .then((response) => {
//         setUsers(response)
//     })
// }, [])

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const emailValue = document.getElementById("email").value
    const passwordValue = document.getElementById("password").value
    UserManager.GetAll()
    .then(users => {
    
    users.find(user => {
      if (user.email === emailValue && user.password === passwordValue){
        credentials.userId=user.id
        
        props.setUser(credentials)
        props.history.push("/posts");
        return 
        

      }

      else  if (user.email !== emailValue && user.password !== passwordValue) {
      alert("email is incorrect")

    }
    })})


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