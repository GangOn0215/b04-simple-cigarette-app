import React, { useState } from "react";

const Option = ({ typesArr, handleWhiteListTypes, toggleHintImg }) => {
  const [dropdownCigaretteTypes, setDropdownCigaretteTypes] = useState(false);
  const toggleDropdown = () =>
    setDropdownCigaretteTypes(!dropdownCigaretteTypes);

  return (
    <div className="option">
      <div className="hint">
        <label>
          <input type="checkbox" value={"hint-img"} onClick={toggleHintImg} />
          hint-img
        </label>
      </div>
      <div className="menu-dropdown">
        <button onClick={toggleDropdown}>추가 할 담배 종류</button>
      </div>
      <div className={`white-list ${dropdownCigaretteTypes ? "show" : ""}`}>
        {typesArr.map((item, idx) => {
          return (
            <label
              className={`white-list-types ${
                dropdownCigaretteTypes ? "show" : ""
              }`}
              key={idx}
            >
              <input
                type="checkbox"
                name={item.name}
                onChange={handleWhiteListTypes}
              />
              {item.name_kr}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Option;
