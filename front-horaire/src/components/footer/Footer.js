import React from 'react';
import { Button} from "react-bootstrap";
import "./style.css"

const Footer = () => {
    return (
        <div className='foot'>
            <div className='cont'>
       
            <p><span className='bold'>Essai gratuit</span>  30 minutes d'appel restantes dans votre periode d'essai</p>
            <input 
            type="range"
            
            max="30"
            
            />
            </div>
            <div className='range'>
            <span className='min'>0min</span><Button variant="danger">Choisir un plan</Button><span className='max'>30min</span>
            </div>
        </div>
    );
};

export default Footer;