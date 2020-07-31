import React from "react";
import NavBar from "./navbar/NavBar";
import ApplicationViews from "./ApplicationViews"
import "./Para.css";

const Para = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };
  return (
    <>
      <NavBar hasUser={hasUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
      
    </>
  );
};

export default Para;