import React, { useState } from "react";
import * as fs from 'fs';
import "../assets/css/Login.css";
import baruch_logo from "../assets/icons/Baruch-College-Stacked-Logos/stacked-color.jpg";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import {Password} from "primereact/password";

// no backend lol
let adminEmail = "admin@baruchmail.cuny.edu";
let studentEmail = "student@baruchmail.cuny.edu";
let adminPass = "hello1";
let studentPass = "hello2";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passed, setPassed] = useState(true);



  let navigate = useNavigate();
  function routeChange(priv) {
    if (priv === "student") {
      var path = "/userpage";
    } else if (priv === "admin") {
      var path = "/adminpage";
    }
    navigate(path);
  }



  function checkLoginInfo() {
    console.log(email);
    console.log(password);
    if (email === studentEmail && password === studentPass) {
      setEmail("");
      setPassword("");
      routeChange("student");
    } else if (email === adminEmail && password === adminPass) {
      setEmail("");
      setPassword("");
      routeChange("admin");
    } else {
        setPassed(false);
    }
  }

  function resetPassword() {
    var x = document.getElementsByClassName("container-1");
    x[0].style.display = "none";
    var y = document.getElementsByClassName("reset-1");
    y[0].style.display = "flex";
  }


  function resetPass() {
    var x = document.getElementsByClassName("container-1");
    var y = document.getElementsByClassName("reset-1");

    // var x is the regular login elements
    // var y is the password reset elements

    if (email === adminEmail) {
      console.log(email);
      console.log(password);
      adminPass = password;
      x[0].style.display = "flex";
      y[0].style.display = "none";
      setPassword("");
      setEmail("");

    } else if ( email === studentEmail) {
      console.log(email);
      console.log(password);
      studentPass = password;
      x[0].style.display = "flex";
      y[0].style.display = "none";
      setPassword("");
      setEmail("");
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
        <Button className="reset-button" label="Forgot Password?" onClick={resetPassword} />
    </div>
      <div className="reset-1">
        {!passed ? <p style={{color: "red"}}>Invalid Email</p> : <></>}
        <div className="reset-2">
          <label htmlFor="in-1" className="block">
            Email
          </label>
          <InputText
              id="in-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="reset-2">
          <label htmlFor="in-1" className="block">
            New Password:
          </label>
          <InputText
              id="in-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="reset-password-container" label="reset" type="submit" onClick={resetPass} />
    </div>
    </div>
  );
}

export default Login;
