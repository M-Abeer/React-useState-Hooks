import React from "react";
// import { Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Error from "./Error";
import User from "./User";
import { Routes, Route, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";

const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/navbar" Component={Navbar} />
        <Route exact path="/search" Component={Search} />
        <Route path="/:fname/:lname" Component={User} />
        {/* <Route path="*" Component={Error} /> */}
        <Route path="/*" Component={About} />
      </Routes>
    </>
  );
};

export default App;
