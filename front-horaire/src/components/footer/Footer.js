import React from 'react';
import { useState } from 'react';
import { Button} from "react-bootstrap";
import "./style.css"

const Footer = () => {
    const [rangeval, setRangeval] = useState(0);

    return (
        <div className='foot'>
            <div className='cont'>
       
            <p><span className='bold'>Essai gratuit</span>  30 minutes d'appel restantes dans votre periode d'essai</p>
            <input 
            className='rang'
            type="range"
            max="30"
            onChange={(event) => setRangeval(event.target.value)}
                />
            </div>
            <div className='range'>
            <span className='min'>{rangeval}min</span><Button variant="danger">Choisir un plan</Button><span className='max'>30min</span>
            </div>
        </div>
    );
};

export default Footer;