import React from "react";
import "./Horaire.css";
import Header from "../components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/nav/Nav";
import { Button } from "react-bootstrap";
import { useState, optionsState } from "react";
import Footer from "../components/footer/Footer";
import { Radio } from "antd";
import Datas from "../components/datas/Datas";
import Axios from "axios";

const Horaire = () => {
  const [rangeval, setRangeval] = useState(8);
  const [fuseau, setFuseau] = useState("");
  const [jours, setJours] = useState("");
  const [horaire, setHoraire] = useState(null);

  const create = () => {
    Axios.post("http://127.0.0.1:3002/post", {
      fuseau: fuseau,
      jours: jours,
      horaire: horaire,
    }).then((response) => {
      console.log(response);
    });
    console.log(fuseau);
    console.log(jours);
    console.log(horaire);
  };

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
              <select
                value={optionsState}
                onChange={(e) => setFuseau(e.target.value)}
              >
                <option value="paris">Paris</option>
                <option value="londres">Londres</option>
                <option value="sao paulo">Sao Paulo</option>
              </select>
              <Radio.Group
                className="groupe"
                onChange={(e) => setJours(e.target.value)}
              >
                <Radio.Button className="box" value="lundi">
                  L
                </Radio.Button>
                <Radio.Button className="box" value="mardi">
                  M
                </Radio.Button>
                <Radio.Button className="box" value="mercredi">
                  M
                </Radio.Button>
                <Radio.Button className="box" value="jeudi">
                  J
                </Radio.Button>
                <Radio.Button className="box" value="vendredi">
                  V
                </Radio.Button>
                <Radio.Button className="box" value="samedi">
                  S
                </Radio.Button>
                <Radio.Button className="box" value="dimanche">
                  D
                </Radio.Button>
              </Radio.Group>
              <div className="horaires">
                <h4>Horaires</h4>
                <input
                  className="range"
                  type="range"
                  min="8"
                  max="19"
                  onChange={(e) => setRangeval(e.target.value)}
                  onClick={(e) => setHoraire(e.target.value)}
                />
                <br />
                <span>Horaire {rangeval}h</span>

                <input type="submit" value="Renitialiser" />
              </div>
            </form>
          </div>
        </div>
        <div className="add">
          <p>+ Ajouter un nouveau crénaux</p>
          <Button variant="danger" onClick={create}>
            Enregistrer
          </Button>
        </div>
      </div>
      <Datas />
      <Footer />
    </div>
  );
};

export default Horaire;
