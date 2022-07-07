import React from "react";
import "./Horaire.css";
import Header from "../components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/nav/Nav";
import { CFormCheck } from '@coreui/react'
import { Button } from "react-bootstrap";
import { useState, optionsState } from "react";
import Footer from "../components/footer/Footer";
import Datas from "../components/datas/Datas";
import { TwoThumbInputRange } from "react-two-thumb-input-range";
import Axios from "axios";

const Horaire = () => {
  const [value, setValue] = useState([1,24]);
  const [heure, setHeure] = useState("");
  const [fuseau, setFuseau] = useState("");
  const [checked, setChecked] = useState([]);


  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList.join(""));
  };
  
  const onValueSChange = (values) => {
  
    setValue(values);
    let val = values.join("");
    let vali = parseInt(val);
    
    
    setHeure(vali);
    
  };

  const create = () => {
    Axios.post("http://127.0.0.1:3002/post", {
      fuseau: fuseau,
      jours: checked,
      horaire: heure,
    }).then((response) => {
      console.log(response);
    });
    console.log(fuseau);
    console.log(checked);
    console.log(heure);
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

              <CFormCheck
                button={{ color: "danger" }}
                className="box"
                id="btn-check-1"
                label="L"
                value="lundi "
                onChange={handleCheck}

              />

              <CFormCheck
                button={{ color: "danger" }}
                id="btn-check-2"
                label="M"
                value="mardi "
                onChange={handleCheck}
              />
              <CFormCheck
                button={{ color: "danger" }}
                id="btn-check-3"
                label="M"
                value="mercredi "
                onChange={handleCheck}
              />
              <CFormCheck
                button={{ color: "danger" }}
                id="btn-check-4"
                label="J"
                value="jeudi "
                onChange={handleCheck}
              />
               <CFormCheck
                button={{ color: "danger" }}
                id="btn-check-5"
                label="V"
                value="vendredi"
                onChange={handleCheck}
              />
               <CFormCheck
                button={{ color: "danger" }}
                id="btn-check-6"
                label="S"
                value="samedi "
                onChange={handleCheck}
              />

               <CFormCheck
                button={{ color: "danger" }}
                id="btn-check-7"
                label="D"
                value="dimanche "
                onChange={handleCheck}
              />
              

              <div className="horaires">
                <h4>Horaires</h4>
                <TwoThumbInputRange
                  onChange={onValueSChange}
                  values={value}
                  min={0}
                  max={24}
                />

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
