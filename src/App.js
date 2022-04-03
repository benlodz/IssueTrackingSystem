import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from './Components/MainPage';
import UserPage from "./Components/UserPage";
import Login from './Components/Login';
import AdminPage from "./Components/AdminPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userpage" element={<UserPage />} />
          <Route path="/adminpage" element={<AdminPage/>} />
      </Routes>
    </div>
  );
}

export default App;
