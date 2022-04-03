import React, { useState } from "react";
import "../assets/css/Login.css";
import baruch_logo from "../assets/icons/Baruch-College-Stacked-Logos/stacked-color.jpg";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import {Password} from "primereact/password";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passed, setPassed] = useState(true);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/userpage";
    navigate(path);
  };

  function checkLoginInfo() {
    console.log(email);
    console.log(password);
    if (email === "student@baruchmail.cuny.edu" && password === "hello14") {
      setEmail("");
      setPassword("");
      routeChange();
    } else {
        setPassed(false);
    }
  }

  return (
    <div>
      <img src={baruch_logo} className="baruch-logo" alt="baruch-logo" />
      <h1>Issue Tracking System</h1>
      <div className="container-1">
        {!passed ? <p style={{color: "red"}}>Invalid email and/or password</p> : <></>}
        <div className="container-2">
          <label htmlFor="in-1" className="block">
            Email
          </label>
          <InputText
            id="in-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="container-3">
          <label htmlFor="in-2" className="block">
            Password
          </label>
          <Password
              feedback={false}
            id="in-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button label="Submit" type="submit" onClick={checkLoginInfo} />
      </div>
    </div>
  );
}

export default Login;
