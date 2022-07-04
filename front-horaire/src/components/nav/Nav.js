import React from "react";
import "./Nav.css";
import { Nav } from "react-bootstrap";

const Navig = () => {
  return (
    <div className="option">
        

      <ul className="ul-navig">
        <li className="li-navig"><img src="./img/tel.png" alt="cadie"/> Mes appels</li>
        <li className="li-navig"><img src="./img/param.png" alt="param"/> Configuration</li>
        <li className="li-navig"><img src="./img/user.png" alt="user"/> Compte</li>
        <li className="li-navig"><img src="./img/cadie.png" alt="cadie"/> Boutique</li>

      </ul>

      <span className="dec"><img src="./img/deconnexion.png" alt="deco"/> Deconnexion</span>
    </div>
  );
};

export default Navig;
