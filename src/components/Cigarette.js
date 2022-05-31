import React, { useState } from 'react';
// import cigarette_su from '../assets/img/cigarette/Esse_Su_01mg.jpg';
import IMAGES from '../assets/index';

import View from './View';
import Option from './Option';

const cigaretteData = [
  {
    id: 0,
    type: '에쎄',
    alias: '체인지 1',
    name: '에쎄 체인지 1mg',
    name_en: 'Esse Change 1mg',
    contry: 'korea',
    img: IMAGES.esse.change_1mg,
    // 출시일 차후 date로 처리해야함
    releaseDate: '2013/06/05',
  },
  {
    id: 1,
    type: '에쎄',
    name: '에쎄 체인지 4mg',
    name_en: 'Esse Change 4mg',
    img: IMAGES.esse.change_4mg,
    contry: 'korea',
  },
  {
    id: 2,
    type: '에쎄',
    name: '에쎄 체인지 업',
    name_en: 'Esse Change UP',
    contry: 'korea',
    img: IMAGES.esse.change_up,
  },
  {
    id: 3,
    type: '에쎄',
    name: '에쎄 체인지 히말라야',
    name_en: 'Esse Change Himalaya',
    img: IMAGES.esse.change_himalaya,
  },
  {
    id: 4,
    type: '에쎄',
    name: '에쎄 체인지 린',
    name_en: 'Esse Change Linn',
    contry: 'korea',
    img: IMAGES.esse.change_linn,
  },
  {
    id: 5,
    type: '에쎄',
    name: '에쎄 체인지 빙',
    name_en: 'Esse Change Bing',
    contry: 'korea',
    img: IMAGES.esse.change_bing,
  },
  {
    id: 6,
    type: '에쎄',
    name: '에쎄 체인지 W',
    name_en: 'Esse Change W',
    contry: 'korea',
    img: IMAGES.esse.change_w,
  },
  {
    id: 7,
    type: '에쎄',
    name: '에쎄 체인지 프로즌',
    name_en: 'Esse_Change_Frozen',
    contry: 'korea',
    img: IMAGES.esse.change_frozen,
  },
  {
    id: 8,
    type: '에쎄',
    name: '에쎄 체인지 시크릿',
    name_en: 'Esse Change Secret',
    contry: 'korea',
    img: IMAGES.esse.change_secret,
  },
  {
    id: 9,
    type: '에쎄',
    name: '에쎄 체인지 더블',
    name_en: 'Esse Change Double',
    contry: 'korea',
    img: IMAGES.esse.change_double,
  },
  {
    id: 10,
    type: '에쎄',
    name: '에쎄 체인지 그램',
    name_en: 'Esse Change Gram',
    contry: 'korea',
    img: IMAGES.esse.change_gram,
  },
  {
    id: 11,
    type: '에쎄',
    name: '에쎄 체인지 로열 팰리스',
    name_en: 'Esse Royal Palace',
    contry: 'korea',
    img: IMAGES.esse.royal_palace,
  },
  {
    id: 12,
    type: '에쎄',
    name: '에쎄 골든 리프',
    name_en: 'Esse Golden Leaf',
    contry: 'korea',
    img: IMAGES.esse.golden_leaf,
  },
  {
    id: 13,
    type: '에쎄',
    name: '에쎄 골든 리프 1',
    name_en: 'Esse Golden Leaf 1mg',
    contry: 'korea',
    img: IMAGES.esse.golden_leaf_1mg,
  },
  {
    id: 14,
    type: '에쎄',
    name: '에쎄 스페셜 골드',
    name_en: 'Esse Special Gold',
    contry: 'korea',
    img: IMAGES.esse.special_gold,
  },
  {
    id: 15,
    type: '에쎄',
    name: '에쎄 스페셜 골드 1',
    name_en: 'Esse Special Gold 1mg',
    contry: 'korea',
    img: IMAGES.esse.special_gold_1mg,
  },
  {
    id: 16,
    type: '에쎄',
    name: '에쎄 스페셜 골드 0.5',
    name_en: 'Esse Special Gold 0.5mg',
    contry: 'korea',
    img: IMAGES.esse.special_gold_05mg,
  },
  {
    id: 17,
    type: '에쎄',
    name: '에쎄 센스 1',
    name_en: 'Esse Sense',
    contry: 'korea',
    img: IMAGES.esse.sense,
  },
  {
    id: 18,
    type: '에쎄',
    name: '에쎄 프라임',
    name_en: 'Esse Prime',
    contry: 'korea',
    img: IMAGES.esse.prime,
  },
  {
    id: 19,
    type: '에쎄',
    name: '에쎄 원',
    name_en: 'Esse One',
    contry: 'korea',
    img: IMAGES.esse.one,
  },
  {
    id: 20,
    type: '에쎄',
    name: '에쎄 클래식',
    name_en: 'Esse Classic',
    contry: 'korea',
    img: IMAGES.esse.classic,
  },
  {
    id: 21,
    type: '에쎄',
    name: '에쎄 아이스',
    name_en: 'Esse Ice',
    contry: 'korea',
    img: IMAGES.esse.ice,
  },
  {
    id: 22,
    type: '에쎄',
    name: '에쎄 아이스 1mg',
    name_en: 'Esse Ice 1mg',
    contry: 'korea',
    img: IMAGES.esse.ice_1mg,
  },
  {
    id: 23,
    type: '에쎄',
    name: '에쎄 프레쏘',
    name_en: 'Esse Presso',
    contry: 'korea',
    img: IMAGES.esse.presso,
  },
  {
    id: 24,
    type: '에쎄',
    name: '에쎄 수',
    name_en: 'Esse Su',
    contry: 'korea',
    img: IMAGES.esse.su,
  },
  {
    id: 25,
    type: '에쎄',
    name: '에쎄 수 0.5mg',
    name_en: 'Esse Su 0.5mg',
    contry: 'korea',
    img: IMAGES.esse.su_05mg,
  },
  {
    id: 26,
    type: '에쎄',
    name: '에쎄 수 0.1mg',
    name_en: 'Esse Su 0.1mg',
    contry: 'korea',
    img: IMAGES.esse.su_01mg,
  },
  {
    id: 27,
    type: '에쎄',
    name: '에쎄 엣지 1mg',
    name_en: 'Esse Edge 1mg',
    contry: 'korea',
    img: IMAGES.esse.edge,
  },
  {
    id: 28,
    type: '더원',
    name: '더원 스카이',
    contry: 'korea',
  },
  {
    id: 29,
    type: '더원',
    name: '더원 블루',
    contry: 'korea',
  },
  {
    id: 30,
    type: '더원',
    name: '더원 오렌지',
    contry: 'korea',
  },
  {
    type: '더원',
    name: '더원 화이트',
    contry: 'korea',
  },
  {
    type: '더원',
    name: '더원 임팩트',
    contry: 'korea',
  },
  {
    type: '더원',
    name: '더원 체인지',
    contry: 'korea',
  },
  {
    type: '다비도프',
    name: '다비도프 리치블루',
    contry: 'korea',
  },
  {
    type: '다비도프',
    name: '다비도프 클래식',
    contry: 'korea',
  },
  {
    type: '디스',
    name: '디스',
    contry: 'korea',
  },
  {
    type: '디스',
    name: '디스 플러스',
    contry: 'korea',
  },
  {
    type: '디스',
    name: '아프리카 룰라',
    contry: 'korea',
  },
  {
    type: '디스',
    name: '아프리카 몰라',
    contry: 'korea',
  },
  {
    type: '디스',
    name: '아프리카 아이스잭',
    contry: 'korea',
  },
  {
    type: '레종',
    name: '레종 프렌치 썸',
    contry: 'korea',
  },
  {
    type: '레종',
    name: '레종 프렌치 ICE 블랑',
    contry: 'korea',
  },
  {
    type: '레종',
    name: '레종 프렌치 끌레오',
    contry: 'korea',
  },
  {
    type: '레종',
    name: '레종 프렌치 요고',
    contry: 'korea',
  },
  {
    type: '레종',
    name: '레종 프렌치 블랙',
    contry: 'korea',
  },
  {
    type: '레종',
    name: '레종 프렌치 폴라',
    contry: 'korea',
  },
  {
    type: '레종',
    name: '레종 블랙',
    contry: 'korea',
  },
  {
    type: '레종',
    name: '레종 블루',
    contry: 'korea',
  },
  {
    type: '레종',
    name: '레종 휘바',
    contry: 'korea',
  },
  {
    type: '레종',
    name: '레종 아이스 프레쏘',
    contry: 'korea',
  },
  {
    type: '레종',
    name: '레종 썬 프레쏘',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 시가 아이스 핏',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 시가 마스터',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 시가 NO.1',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 시가 NO.3',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 시가 NO.6',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 시가 미니 1',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 시가 미니 5',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 쿠바나 더블',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 쿠바나 샷',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 파이프 스코티',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 슬림핏 화이트',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 슬림핏 브라운',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 시가 카리브',
    contry: 'korea',
  },
  {
    type: '보헴 시가',
    name: '보헴 시가 리브레',
    contry: 'korea',
  },
  {
    type: '심플',
    name: '심플 에이스 1',
    contry: 'korea',
  },
  {
    type: '심플',
    name: '심플 클래식',
    contry: 'korea',
  },
  {
    type: '클라우드 나인',
    name: '클라우드 나인',
    contry: 'korea',
  },
  {
    type: '클라우드 나인',
    name: '클라우드 나인 1',
    contry: 'korea',
  },
  {
    type: '타임',
    name: '타임',
    contry: 'korea',
  },
  {
    type: '타임',
    name: '타임 미드',
    contry: 'korea',
  },
  {
    type: null,
    name: '88리턴즈',
    contry: 'korea',
  },
  {
    type: null,
    name: '라일락',
    contry: 'korea',
  },
  {
    type: null,
    name: '시즌',
    contry: 'korea',
  },
  {
    type: '토니노 람보르기니',
    name: '아이스볼트 GT',
    contry: 'korea',
  },
  {
    type: null,
    name: '한라산',
    contry: 'korea',
  },
];

const typesArr = [
  '에쎄',
  '더원',
  '레종',
  '클라우드 나인',
  '타임',
  '심플',
  '보헴 시가',
  '다비도프',
  '디스',
];

const Cigarette = () => {
  const [cigarette, setCigarette] = useState(cigaretteData);
  const [isHintImg, setIsHintImg] = useState(false);
  const [filterTypeList, setFilterTypeList] = useState([]);

  const toggleHintImg = () => setIsHintImg(!isHintImg);

  // 담배 데이터들을 필터를 하여 filterTypeList(담배 종류 필터 리스트) 블랙리스트에 해당하지 않는 담배들을 담아 filteredCigaretteData 변수에 넣어줍니다.
  const randomCigarette = () => {
    const filteredCigaretteData = cigaretteData.filter((item) => {
      return !filterTypeList.includes(item.type);
    });

    const randomIDX = Math.floor(Math.random() * filteredCigaretteData.length - 1) + 1;

    setCigarette(filteredCigaretteData[randomIDX]);
    console.log(filteredCigaretteData[randomIDX]);
  };

  const insertFilter = (filterType) => {
    setFilterTypeList([...filterTypeList, filterType]);
  };
  const removeFilter = (filterType) => {
    const newFilterList = filterTypeList.filter((item) => item !== filterType);
    setFilterTypeList(newFilterList);
  };

  // 제외할 담배 타입을 지정하는 함수 입니다.
  const handleDisableTypes = (e) => {
    if (e.target.checked) {
      console.log(`[ ${e.target.name} ] type 이 제외 되었습니다.`);
      insertFilter(e.target.name);

      return;
    }

    console.log(`[ ${e.target.name} ] type 이 제외 취소 되었습니다.`);
    removeFilter(e.target.name);

    return;
  };

  return (
    <div className='cigarette'>
      <View cigarette={cigarette} isHintImg={isHintImg} randomCigarette={randomCigarette} />
      <Option
        typesArr={typesArr}
        handleDisableTypes={handleDisableTypes}
        toggleHintImg={toggleHintImg}
      />
    </div>
  );
};

export default Cigarette;
