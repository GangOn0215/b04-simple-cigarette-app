import React from 'react';

const Option = ({ typesArr, handleDisableTypes, toggleHintImg }) => {
  return (
    <div className='option'>
      <label>
        <input type='checkbox' value={'hint-img'} onClick={toggleHintImg} />
        hint-img
      </label>
      <br />
      {typesArr.map((item, idx) => {
        return (
          <label key={idx}>
            <input type='checkbox' name={item} onChange={handleDisableTypes} />
            {item}
          </label>
        );
      })}
    </div>
  );
};

export default Option;
