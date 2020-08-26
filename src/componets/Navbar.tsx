import React from 'react';

//import "bootstrap/dist/css/bootstrap.css";

export const Navbar: React.FC = () => (

<nav>
<div className="nav-wrapper  teal accent-3 px1">
  <a href="/" className="brand-logo">React + Typescript</a>
  <ul className="right hide-on-med-and-down">
    <li ><a href="sass.html">
      Список дел</a></li>
    <li><a href="badges.html">
      Информация</a></li>
  </ul>
</div>
</nav>
)