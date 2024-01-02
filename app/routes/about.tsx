import { Link } from "@remix-run/react";
import React from "react";

const About = () => {
  return (
    <div>
      <p>About page</p>
      <Link to={"/"}>go home</Link>
    </div>
  );
};

export default About;
