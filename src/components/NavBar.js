import React from "react";
const links = ["home", "about", "projects"];
function NavBar({ links }) {


  return <nav>{<ul id="nav-list">
    {links.map((link) => (
      <li key={link}>
        <a href={`#${link}`}>{link}</a>
      </li>
    ))}
  </ul>}</nav>;
}

export default NavBar;
