import React from 'react';

const Option = ({ typesArr, handleDisableTypes }) => {
  return (
    <div className='option'>
      <label>
        <input type='checkbox' value={'hint-img'} />
        hint-img
      </label>
      <br />
      {/* https://pngroyale.com/wp-content/uploads/2021/12/Download-free-Question-Mark-PNG-Free-Image-PNG.png */}
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
