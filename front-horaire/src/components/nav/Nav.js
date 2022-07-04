import React from "react";
import "./Nav.css";
import { Nav } from "react-bootstrap";

const Navig = () => {
  return (
    <div className="option">
        

      <ul className="ul-navig">
        <li className="li-navig">Mes appels</li>
        <li className="li-navig">Configuration</li>
        <li className="li-navig">Compte</li>
        <li className="li-navig">Boutique</li>

      </ul>

      <span>Deconnexion</span>
    </div>
  );
};

export default Navig;
