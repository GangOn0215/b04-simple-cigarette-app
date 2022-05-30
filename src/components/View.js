import React from 'react';

const View = ({ cigarette, randomCigarette }) => {
  return (
    <div className='view-container'>
      <div className='view-name'>
        <img src={cigarette.img} alt={''} />
        <span>{cigarette.name}</span>
      </div>

      <button onClick={randomCigarette}>돌리기</button>
    </div>
  );
};

export default View;
