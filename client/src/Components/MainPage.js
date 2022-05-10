
import React from "react";
import '../assets/css/MainPage.css';
import baruch_logo from '../assets/icons/Baruch-College-Stacked-Logos/stacked-color.jpg';
import {Button} from 'primereact/button';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    
    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/login';
        navigate(path);
    }

    return (
        <div>
            <img src={baruch_logo} className="baruch-logo" alt="baruch-logo" />
            <h1>Issue Tracking System</h1>
            <div className="container">
                <Button label="Login" onClick={routeChange}/>
            </div>
        </div>
    );
}

export default MainPage;