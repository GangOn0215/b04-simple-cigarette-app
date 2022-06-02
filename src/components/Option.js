import React from 'react';

const Option = ({ typesArr, handleWhiteListTypes, toggleHintImg }) => {
  return (
    <div className='option'>
      <div className='hint'>
        <label>
          <input type='checkbox' value={'hint-img'} onClick={toggleHintImg} />
          hint-img
        </label>
      </div>
      <div className='white-list'>
        {typesArr.map((item, idx) => {
          return (
            <label className='white-list-types' key={idx}>
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
