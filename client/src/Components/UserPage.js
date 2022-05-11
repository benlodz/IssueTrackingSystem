import React, { useState } from "react";
import "../assets/css/UserPage.css";
import baruch_logo from "../assets/icons/Baruch-College-Stacked-Logos/stacked-color.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

import data from "../assets/data.json"



function UserPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();
  function routeChange() {
    navigate("/adminpage");
  }

  function viewTickets() {
    routeChange();
  }

  async function submitTicket() {
    const newIssue = {"id": "4", "category": category, "priority" : priority, "status":"open"};

    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newIssue)
    };

    console.log(requestOptions.body);
    fetch("http://localhost:3002/ticket", requestOptions)
    .then(respond => {console.log(respond)}).catch(err => {
      console.log(err);
    });
  }

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
        <Button label="View Your Tickets" onClick={viewTickets}/>
      </div>
      <div className="container-4">
        <InputText id="in-1" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
        <InputText id="in-2" placeholder="Category" onChange={(e) => setCategory(e.target.value)}/>
        <InputText id="in-3" placeholder="Priority" onChange={(e) => setPriority(e.target.value)}/>
        <InputTextarea rows={10} cols={40} autoResize placeholder="Issue Description" onChange={(e) => setDescription(e.target.value)}/>
      <Button label="Submit a Ticket" onClick={submitTicket}/>
      </div>
    </div>
  );
}

export default UserPage;
