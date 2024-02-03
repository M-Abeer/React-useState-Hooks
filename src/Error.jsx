import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Error = () => {
  const navigate = useLocation();

  return (
    <>
      <h1>Error 404!</h1>
      <NavLink to="/">Go to Home</NavLink>
    </>
  );
};
export default Error;
