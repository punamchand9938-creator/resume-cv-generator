import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { useResume } from "../contexts/ResumeContext";
import Wizard from "./components/Wizard";

const APP_NAME = "Resume Generator";
const APP_DESCRIPTION = "Professional CV and resume builder with ATS optimization";

function App() {
  const { state } = useResume();
  
  useEffect(() => {
    document.title = "Made by Ojas - Resume Generator";
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) metaDesc.setAttribute("content", APP_DESCRIPTION);
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="credit-badge">Made by Ojas</div>
          <div>
            <p className="app-subtitle">{APP_DESCRIPTION}</p>
            <h1>{APP_NAME}</h1>
          </div>
        </div>
      </header>
      
      <main className="app-main">
        <Wizard />
      </main>
    </div>
  );
}

export default App;