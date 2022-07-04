import React from "react";
import "./Horaire.css";
import Header from "../components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/nav/Nav";
import { Button} from "react-bootstrap";
import Footer from "../components/footer/Footer";

const Horaire = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="contain">
        <h4>Horraire d'ouverture</h4>
        <h4>Fuseau horaire</h4>
        <div className="horraire">
          <div className="jour"></div>
          <div className="horaires">
            <input type="radio" value="Male" name="gender" /> Lundi
            <input type="radio" value="Female" name="gender" /> Mardi
            <input type="radio" value="Other" name="gender" /> Mercredi
            <input type="radio" value="Male" name="gender" /> Jeudi
            <input type="radio" value="Female" name="gender" /> Vendredi
            <input type="radio" value="Other" name="gender" /> Samedie
            <input type="radio" value="Male" name="gender" /> Dimanche
          </div>
        </div>
        <p>+ Ajouter un nouveau crénaux</p>
        <Button variant="danger">Choisir un plan</Button>
      </div>
      <Footer />
    </div>
  );
};

export default Horaire;
