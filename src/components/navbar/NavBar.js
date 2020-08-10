import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }

  return (
    <header>
      <center>
        <img src={require("./navtitle.png")} alt="Paranormal Apptivity Site Logo" className="photo" className="navtitle"/>
      </center>
      <nav>
        <ul className="container">
          <li>
          <Link className="nav-link" to="/">
              Home 
            </Link>
          </li>
          <li>
          <Link className="nav-link" to="/posts">
              Dashboard
            </Link>
          </li>
          <li>
          <Link className="nav-link" to="/friends">
              Friends
            </Link>
          </li>
          <li>
          <Link className="nav-link" to="/chatroom">
              Chatroom
            </Link>
          </li>

          {props.hasUser
            ? <li>
                <span className="nav-link" onClick={handleLogout}> Logout </span>
              </li>
            : <li>
                <Link className="nav-link" to="/login">Login</Link>
              </li>}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);