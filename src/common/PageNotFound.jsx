import React from "react";
import PageNotFoundImg from "./../assets/404-not-found.png";

const PageNotFound = () => {
  return (
    <div className="no_data_found_container">
      <img src={PageNotFoundImg} alt="Page Not Found" />
    </div>
  );
};

export default PageNotFound;
