import React, { useState } from 'react';

const cigaretteData = [
  {
    id: 0,
    name: '에쎄체인지 1mg',
    img: 'http://eocstore.com/web/product/big/201803/1070_shop2_238049.jpg',
  },
  {
    id: 1,
    name: '에쎄체인지 4mg',
    img: 'http://eocstore.com/web/product/big/201803/1071_shop2_573525.jpg',
  },
  {
    id: 2,
    name: '에쎄체인지 업',
    img: 'http://eocstore.com/web/product/big/201803/1041_shop2_351289.jpg',
  },
  {
    id: 3,
    name: '에쎄체인지 히말라야',
    img: 'https://tabacco.co.kr/web/product/big/20200224/0990a7b6abd446ab67e80988290bdc3d.jpg',
  },
  {
    id: 4,
    name: '에쎄체인지 린',
    img: 'https://tabacco.co.kr/web/product/big/201905/bb037568a800fdfe966edcbeabace5f6.jpg',
  },
  {
    id: 5,
    name: '에쎄체인지 빙',
    img: 'http://eocstore.com/web/product/big/201803/1013_shop2_619676.jpg',
  },
  {
    id: 6,
    name: '에쎄체인지 더블유',
    img: 'http://eocstore.com/web/product/big/201803/1176_shop2_640524.jpg',
  },
  {
    id: 7,
    name: '에쎄체인지 프로즌',
    img: 'http://www.goodmorningcc.com/news/photo/202005/232348_240788_4757.jpg',
  },
  { id: 8, name: '에쎄체인지 시크릿' },
];
const Cigarette = () => {
  const [cigarette, setCigarette] = useState(cigaretteData[0]);
  const [isHintImg, setIsHintImg] = useState(false);
  const onChange = () => setIsHintImg(!isHintImg);

  const randomCigarette = () => {
    const randomIDX = Math.floor(Math.random() * cigaretteData.length - 1) + 1;
    console.log(randomIDX);
    setCigarette(cigaretteData[randomIDX]);
  };
  // const

  return (
    <div className='cigarette'>
      <div className='view-name'>
        <img src={cigarette.img} alt='' />
        <span>{cigarette.name}</span>
      </div>
      <button onClick={randomCigarette}>돌리기</button>
    </div>
  );
};

export default Cigarette;
