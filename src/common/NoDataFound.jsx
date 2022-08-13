import React from "react";
import NoDataFoundImage from "./../assets/no-data-found.png";

const NoDataFound = () => {
  return (
    <div className="no_data_found_container">
      <img src={NoDataFoundImage} alt="No data found" />
    </div>
  );
};

export default NoDataFound;
