import React from "react";
import QuoraHeader from "./QuoraHeader";
import "./css/Quora.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";

function Quora({ allData }) {
  return (
    <div className="quora">
      <QuoraHeader />
      <div className="quora__contents">
        
          <Sidebar />
          <Feed allData={allData} />
          <Widget allData={allData} />
        
      </div>
    </div>
  );
}

export default Quora;
