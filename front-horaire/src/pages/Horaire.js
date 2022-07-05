import React from "react";
import "./Horaire.css";
import Header from "../components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/nav/Nav";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Footer from "../components/footer/Footer";
import { Radio } from "antd";

const Horaire = () => {
  const [rangeval, setRangeval] = useState(8);

  function reset() {
    document.getElementById("create-course-form").reset();
  }

  return (
    <div>
      <Header />
      <Nav />
      <div className="contain">
        <h4 className="H">Horraire d'ouverture</h4>
        <h4 className="F">Fuseau horaire</h4>
        <div className="horaire">
          <div className="jour">
            <h4>Jours d'ouverture</h4>

            <form id="create-course-form">
              <Radio.Group  className="groupe">
                <Radio.Button className="box" value="lundi">L</Radio.Button>
                <Radio.Button className="box" value="mardi">M</Radio.Button>
                <Radio.Button className="box" value="mercredi">M</Radio.Button>
                <Radio.Button className="box" value="jeudi">J</Radio.Button>
                <Radio.Button className="box" value="vendredi">V</Radio.Button>
                <Radio.Button className="box" value="samedi">S</Radio.Button>
                <Radio.Button className="box" value="dimanche">D</Radio.Button>

              </Radio.Group>
              <div className="horaires">
                <h4>Horaires</h4>
                <input
                  className="range"
                  type="range"
                  min="8"
                  max="19"
                  onChange={(event) => setRangeval(event.target.value)}
                />
                <br />
                <span>Horaire {rangeval}h</span>
        
                  <input type="submit" value="Renitialiser"/>
              </div>
            </form>
          </div>
        </div>
        <div className="add">
          <p>+ Ajouter un nouveau crénaux</p>
          <Button variant="danger">Enregistrer</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Horaire;
