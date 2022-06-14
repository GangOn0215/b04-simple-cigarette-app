import React, { useState, useRef } from 'react';

const Option = ({ typesArr, handleWhiteListTypes, toggleHintImg, toggleFilter }) => {
  const [dropdownCigaretteTypes, setDropdownCigaretteTypes] = useState(false);
  const [allCheck, setAllCheck] = useState(false);
  const refWhiteLists = useRef([]);

  const toggleDropdown = () => setDropdownCigaretteTypes(!dropdownCigaretteTypes);

  const checkAllInput = () => {
    const checked = !allCheck;
    toggleFilter(allCheck);

    for (let i = 0; i < 10; i++) {
      refWhiteLists.current[i].children[0].checked = checked;
      // refWhiteLists.current[i].children[0].click();
    }

    setAllCheck(!allCheck);
  };

  const addToRefs = (e) => {
    // console.log(e)
    if (refWhiteLists.current.length < 10) {
      refWhiteLists.current.push(e);
    }
  };

  return (
    <div className='option'>
      <div className='hint'>
        <label>
          <input type='checkbox' value={'hint-img'} onClick={toggleHintImg} />
          hint-img
        </label>
      </div>
      <div className='menu-dropdown'>
        <button onClick={toggleDropdown}>추가 할 담배 종류</button>
      </div>
      <div className={`white-list ${dropdownCigaretteTypes ? 'show' : ''}`}>
        <label id='check-all' className='white-list-types'>
          <input type='checkbox' onChange={checkAllInput} />
          전체 체크
        </label>
        {typesArr.map((item, idx) => {
          return (
            <label ref={addToRefs} className={`white-list-types`} key={idx}>
              <input type='checkbox' name={item.name} onChange={handleWhiteListTypes} />
              {item.name_kr}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Option;
