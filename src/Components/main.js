import React from "react";
import { Link, NavLink } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Link to="/">form</Link>
      <Link to="/">serverform</Link>
      <Link to="/">connectivityrequest</Link>
      <Link to="/">matrix</Link>
      <br />
      <a href="/">form</a>
      <a href="/">serverform</a>
      <a href="/">connectivityrequest</a>
      <a href="/">matrix</a>
    </>
  );
};

export default Main;
