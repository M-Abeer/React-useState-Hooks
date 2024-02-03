import React from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const goto = () => {
    navigate("/contact");
  };
  return (
    <>
      <h1>
        User {fname} {lname} Page
      </h1>
      <p>My current location is {location.pathname}</p>
      {location.pathname === `/Abeer/Naveed` ? (
        <button onClick={alert("Hello Abeer")}>Abeer</button>
      ) : null}
      <button onClick={goto}>Go to Contact Page</button>
    </>
  );
};

export default User;
