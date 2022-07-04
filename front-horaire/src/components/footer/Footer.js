import React from 'react';
import { Button} from "react-bootstrap";
import "./style.css"

const Footer = () => {
    return (
        <div className='foot'>
            <div className='cont'>
       
            <span><p>Essai gratuit</p></span><p>30 minutes d'appel restantes dans votre periode d'essai</p>
            <input 
            type="range"
            min="0" max="30"
            />
            </div>
            <Button variant="danger">Choisir un plan</Button>
        </div>
    );
};

export default Footer;