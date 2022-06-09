import React, { useState } from 'react';
import question_mark from '../assets/img/question_mark.png';

const View = ({ cigaretteOBJ, filterTypeList, isHintImg }) => {
  const [cigarette, setCigarette] = useState({
    img: '',
    name: '',
  });

  // 담배 데이터들을 필터를 하여 filterTypeList(담배 종류 필터 리스트) 화이트리스트 담배들을 담아 filteredCigaretteData 변수에 넣어줍니다.
  const randomCigarette = () => {
    const cigaretteKeys = Object.keys(cigaretteOBJ);
    const filteredCigaretteData = [];

    // 차후에 for loop로 돌리는것이 아닌 insert delete로 처리할수있도록 할것입니다.
    // 이유는 양이 많아질수록 느려지고 속도면에서 뒤쳐집니다.
    cigaretteKeys.forEach((key, index) => {
      if (filterTypeList.includes(key)) {
        for (let i = 0; i < cigaretteOBJ[key].length; i++) {
          filteredCigaretteData.push(cigaretteOBJ[key][i]);
        }
      }
    });

    const randomIDX = Math.floor(Math.random() * filteredCigaretteData.length - 1) + 1;

    setCigarette(filteredCigaretteData[randomIDX]);
    console.log(filteredCigaretteData[randomIDX]);
    console.log(cigaretteOBJ);
  };

  return (
    <div className='view-container'>
      <div className='view-name'>
        <div className='img-box'>
          {isHintImg ? (
            <img src={cigarette.img} alt={''} />
          ) : (
            <>
              <img src={question_mark} alt={''} />
            </>
          )}
        </div>
        <span>{cigarette.name ? cigarette.name : '담배 종류를 추가 해주세요.'}</span>
      </div>

      <button onClick={randomCigarette}>돌리기</button>
    </div>
  );
};

View.defaultProps = {
  cigarette: { img: '', name: '' },
};
export default View;
