import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

const Dropdown = ({ select, setSelect }) => {
  const [isActive, setIsActive] = useState(false);

  const dropdownOptions = ["1", "2", "3", "4"];
  return (
    <div className="dropdown">
      <div className="dropdown_btn" onClick={() => setIsActive(!isActive)}>
        {select}
        <BsFillCaretDownFill
          className={isActive ? "drop-active" : "drop-inactive"}
        />
      </div>
      {isActive && (
        <div className="dropdown_content">
          {dropdownOptions.map((options) => (
            <div
              key={options}
              onClick={(e) => {
                setSelect(options)
                setIsActive(false)
              }}
              className="dropdown_item"
            >
              {options}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
