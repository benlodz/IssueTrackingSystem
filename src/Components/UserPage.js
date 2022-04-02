import React from "react";
import "../assets/css/UserPage.css";
import baruch_logo from "../assets/icons/Baruch-College-Stacked-Logos/stacked-color.jpg";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

function UserPage() {
  return (
    <div>
      <div className="container-1">
        <img src={baruch_logo} className="baruch-logo" alt="baruch-logo" />
        <div className="container-2">
          <h1>Issue Tracking System</h1>
        </div>
      </div>
      <hr></hr>
      <div className="container-3">
        <Button label="Submit a Ticket" />
        <Button label="View Your Tickets" />
      </div>
      <div className="container-4">
        <InputText id="in-1" placeholder="Title"/>
        <InputText id="in-2" placeholder="Category"/>
        <InputText id="in-3" placeholder="Is Issue Repeatable/Reproducible"/>
        <InputTextarea rows={10} cols={40} autoResize placeholder="Issue Description"/>
      </div>
    </div>
  );
}

export default UserPage;
