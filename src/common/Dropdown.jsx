import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

const Dropdown = ({ select, setSelect, dropdownOptions }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="dropdown"
      tabIndex={0}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="dropdown_btn">
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
                setSelect(options);
                setIsActive(false);
              }}
              className={
                options === select ? "dropdown_item active" : "dropdown_item"
              }
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
