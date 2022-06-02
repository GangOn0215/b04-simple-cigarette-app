import React from 'react';
import question_mark from '../assets/img/question_mark.png';

const View = ({ cigarette, isHintImg, randomCigarette }) => {
  return (
    <div className='view-container'>
      <div className='view-name'>
        <div className='img-box'>
          {isHintImg ? (
            <img src={cigarette.img} alt={''} />
          ) : (
            <>
              <img src={question_mark} alt='' />
            </>
          )}
        </div>
        <span>{cigarette.name}</span>
      </div>

      <button onClick={randomCigarette}>돌리기</button>
    </div>
  );
};

View.defaultProps = {
  cigarette: { img: '', name: '' },
};
export default View;
