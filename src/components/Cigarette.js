import React, { useState } from 'react';

const cigaretteData = [
  {
    id: 0,
    type: '에쎄',
    alias: '체인지 1',
    name: '에쎄체인지 1mg',
    contry: 'korea',
    img: 'http://eocstore.com/web/product/big/201803/1070_shop2_238049.jpg',
    // 출시일 차후 date로 처리해야함
    releaseDate: '2013/06/05',
  },
  {
    id: 1,
    type: '에쎄',
    name: '에쎄체인지 4mg',
    contry: 'korea',
    img: 'http://eocstore.com/web/product/big/201803/1071_shop2_573525.jpg',
  },
  {
    id: 2,
    type: '에쎄',
    name: '에쎄체인지 업',
    contry: 'korea',
    img: 'http://eocstore.com/web/product/big/201803/1041_shop2_351289.jpg',
  },
  {
    id: 3,
    type: '에쎄',
    name: '에쎄체인지 히말라야',
    contry: 'korea',
    img: 'https://tabacco.co.kr/web/product/big/20200224/0990a7b6abd446ab67e80988290bdc3d.jpg',
  },
  {
    id: 4,
    type: '에쎄',
    name: '에쎄체인지 린',
    contry: 'korea',
    img: 'https://tabacco.co.kr/web/product/big/201905/bb037568a800fdfe966edcbeabace5f6.jpg',
  },
  {
    id: 5,
    type: '에쎄',
    name: '에쎄체인지 빙',
    contry: 'korea',
    img: 'http://eocstore.com/web/product/big/201803/1013_shop2_619676.jpg',
  },
  {
    id: 6,
    type: '에쎄',
    name: '에쎄체인지 더블유',
    contry: 'korea',
    img: 'http://eocstore.com/web/product/big/201803/1176_shop2_640524.jpg',
  },
  {
    id: 7,
    type: '에쎄',
    name: '에쎄체인지 프로즌',
    contry: 'korea',
    img: 'http://www.goodmorningcc.com/news/photo/202005/232348_240788_4757.jpg',
  },
  {
    id: 8,
    type: '에쎄',
    name: '에쎄체인지 시크릿',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄체인지 더블',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄체인지 그램',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄체인지 로열 팰리스',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 골든 리프',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 골든 리프 1',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 스페셜 골드',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 스페셜 골드 1',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 스페셜 골드 0.5',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 센스 1',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 프라임',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 원',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 클래식',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 아이스',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 아이스 1',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 프레쏘',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 수',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 수 0.5',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 수 0.1',
    contry: 'korea',
  },
  {
    type: '에쎄',
    name: '에쎄 엣지 1',
    contry: 'korea',
  },
  {
    type: '더원',
    name: '더원 스카이',
    contry: 'korea',
  },
  {
    type: '더원',
    name: '더원 블루',
    contry: 'korea',
  },
  {
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
  // 사용자가 돌리기 버튼을 눌렸을때 화면에 보여주기 위해 object 형태로 데이터를 받는 state
  const [cigarette, setCigarette] = useState(cigaretteData);

  // 사용자가 외우기 위해 힌트를 조금씩 줍니다.
  // 해당 힌트는 이미지를 보여주기 위함 false, true 입니다.
  const [isHintImg, setIsHintImg] = useState(false);

  // 담배의 종류 (에쎄, 레종, 타임) 같은 것을 필터하기 위한 리스트 입니다.
  const [filterTypeList, setFilterTypeList] = useState([]);

  // 힌트 toggle입니다.
  const onChange = () => setIsHintImg(!isHintImg);

  // 담배를 랜덤으로 돌리기 위한 함수입니다.
  const randomCigarette = () => {
    // 담배 데이터들을 필터를 하여 filterTypeList(담배 종류 필터 리스트) 블랙리스트에 해당하지 않는 담배들을 담아 filteredCigaretteData 변수에 넣어줍니다.
    const filteredCigaretteData = cigaretteData.filter((item) => {
      return !filterTypeList.includes(item.type);
    });

    // 랜덤 idx를 지정합니다.
    const randomIDX = Math.floor(Math.random() * filteredCigaretteData.length - 1) + 1;

    // filteredCigaretteData 배열에 랜덤 idx를 적용하여 cigarette에 넣어줍니다.
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
    // 만약 체크가 된거라면
    if (e.target.checked) {
      console.log(`[ ${e.target.name} ] type 이 제외 되었습니다.`);

      // e.target.name 의 이름을 확인 후 해당 담배 타입을 제외 시켜줍니다.
      insertFilter(e.target.name);
      return;
    }

    console.log(`[ ${e.target.name} ] type 이 제외 취소 되었습니다.`);

    // e.target.name 의 이름을 확인 후 해당 담배 타입을 제외 취소 시켜줍니다.
    removeFilter(e.target.name);
    return;
  };
  // const

  return (
    <div className='cigarette'>
      <div className='view-container'>
        <div className='view-name'>
          {/* ? 이미지 */}
          <img
            src='https://cdn-icons.flaticon.com/png/512/2732/premium/2732700.png?token=exp=1653782588~hmac=af94552d745b95d52f2bfd498d0400d1'
            alt=''
          />
          {/* <img src={cigarette.img} alt='' /> */}
          <span>{cigarette.name}</span>
        </div>

        <button onClick={randomCigarette}>돌리기</button>
      </div>
      <div className='option'>
        <label>
          <input type='checkbox' value={'hint-img'} />
          hint-img
        </label>
        {/* 담배 종류 를 checkbox 형태로 map을 이용하여 뿌려줍니다. */}
        {typesArr.map((item, idx) => {
          return (
            <label key={idx}>
              <input type='checkbox' name={item} onChange={handleDisableTypes} />
              {item}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Cigarette;
