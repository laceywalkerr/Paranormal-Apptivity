
import React, { useState } from 'react';
import NavBar from "./navbar/NavBar";
import ApplicationViews from "./ApplicationViews"
import "./Para.css";

const Para = () => {
  const isAuthenticated = () =>  { 
    if (sessionStorage.getItem("credentials") !== null) {
      return true 
    } else {
      return false
    }
  }

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    sessionStorage.setItem("activeUserId", JSON.stringify(user.userId));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated())
  }
  
  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
      
    </>
  );
};

export default Para;