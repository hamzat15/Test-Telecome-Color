import React from "react";
import "./Header.css"
import { Navbar, Container, Button} from "react-bootstrap";

const Header = () => {
  return (
    <div className="head">
      <Navbar className="color navbar-custom">
        <Container>
          <Navbar.Brand href="#home">

            
          <ul className="ul-nav">
            <li className="li-nav">Elit Dentaire<br/><img src="./img/tel.png" alt="tel"/> 01 76 50 98 99</li>
            <li className="li-nav">Forfait 5H<br/>
            <img className="horl" src="./img/horloge.png" alt="horloge"/> <span className="ligne"></span><span className="minute">2min</span>
            </li>
            <li className="li-nav">Credit <br/><img src="./img/pieces.png" alt="pieces"/> 0,00&euro;</li>
            <li className="li-nav"> <Button variant="danger">Standard ouvert</Button>{' '}</li>
          </ul>
         </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
