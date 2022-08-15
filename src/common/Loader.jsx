import React, { useEffect } from "react";
import "./loader.css";
import logo from "./../assets/logo.svg";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loading">Loading Data...</div>
    </div>
  );
};

export default Loader;

const WebsiteLoader = () => {
  useEffect(() => {
    let logoTextIn = document.getElementById("logoTextIn");

    setTimeout(() => {
      logoTextIn.classList.remove("focus-in-contract-bck");
      logoTextIn.classList.add("blur-out-expand-fwd");
    }, 1400);
  }, []);

  return (
    <div className="website_loader">
      <div>
        <p id="logoTextIn" className="focus-in-contract-bck">
          RB - CRYPTOVERSE
        </p>
        <div className="progress_loader"></div>
      </div>
    </div>
  );
};

export { WebsiteLoader };
