import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  return (
    <header>
      <h1 className="site-title">
        <img src={require("./navtitle.png")} alt="Paranormal Apptivity Site Logo" />
      </h1>
      <nav>
        <ul className="container">
          <li>
          <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/users">
              User
            </Link>
          </li>
          <li>
          <Link className="nav-link" to="/posts">
              Entry
            </Link>
          </li>
          <li>
          <Link className="nav-link" to="/catagory">
              Category
            </Link>
          </li>
          <li>
          <Link className="nav-link" to="/chatroom">
              Chat
            </Link>
          </li>
          <li>
          <Link className="nav-link" to="/friends">
              Friends
            </Link>
          </li>
          {!props.hasUser
            ? <li>
                <Link className="nav-link" to="/login"> Login </Link>
              </li>
            : null}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;