import React, { useState } from 'react';
// import cigarette_su from '../assets/img/cigarette/Esse_Su_01mg.jpg';
import IMAGES from '../assets/index';

import View from './View';
import Option from './Option';

const cigaretteOBJ = {
  esse: [
    {
      id: 0,
      type: '에쎄',
      alias: '체인지 1',
      name: '에쎄 체인지 1mg',
      name_en: 'Esse Change 1mg',
      contry: 'korea',
      img: IMAGES.esse.change_1mg,
      // release_date
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
      img: IMAGES.esse.change_up,
      contry: 'korea',
    },
    {
      id: 3,
      type: '에쎄',
      name: '에쎄 체인지 히말라야',
      name_en: 'Esse Change Himalaya',
      img: IMAGES.esse.change_himalaya,
      contry: 'korea',
    },
    {
      id: 4,
      type: '에쎄',
      name: '에쎄 체인지 린',
      name_en: 'Esse Change Linn',
      img: IMAGES.esse.change_linn,
      contry: 'korea',
    },
    {
      id: 5,
      type: '에쎄',
      name: '에쎄 체인지 빙',
      name_en: 'Esse Change Bing',
      img: IMAGES.esse.change_bing,
      contry: 'korea',
    },
    {
      id: 6,
      type: '에쎄',
      name: '에쎄 체인지 W',
      name_en: 'Esse Change W',
      img: IMAGES.esse.change_w,
      contry: 'korea',
    },
    {
      id: 7,
      type: '에쎄',
      name: '에쎄 체인지 프로즌',
      name_en: 'Esse_Change_Frozen',
      img: IMAGES.esse.change_frozen,
      contry: 'korea',
    },
    {
      id: 8,
      type: '에쎄',
      name: '에쎄 체인지 시크릿',
      name_en: 'Esse Change Secret',
      img: IMAGES.esse.change_secret,
      contry: 'korea',
    },
    {
      id: 9,
      type: '에쎄',
      name: '에쎄 체인지 더블',
      name_en: 'Esse Change Double',
      img: IMAGES.esse.change_double,
      contry: 'korea',
    },
    {
      id: 10,
      type: '에쎄',
      name: '에쎄 체인지 그램',
      name_en: 'Esse Change Gram',
      img: IMAGES.esse.change_gram,
      contry: 'korea',
    },
    {
      id: 11,
      type: '에쎄',
      name: '에쎄 체인지 로열 팰리스',
      name_en: 'Esse Royal Palace',
      img: IMAGES.esse.royal_palace,
      contry: 'korea',
    },
    {
      id: 12,
      type: '에쎄',
      name: '에쎄 골든 리프',
      name_en: 'Esse Golden Leaf',
      img: IMAGES.esse.golden_leaf,
      contry: 'korea',
    },
    {
      id: 13,
      type: '에쎄',
      name: '에쎄 골든 리프 1',
      name_en: 'Esse Golden Leaf 1mg',
      img: IMAGES.esse.golden_leaf_1mg,
      contry: 'korea',
    },
    {
      id: 14,
      type: '에쎄',
      name: '에쎄 스페셜 골드',
      name_en: 'Esse Special Gold',
      img: IMAGES.esse.special_gold,
      contry: 'korea',
    },
    {
      id: 15,
      type: '에쎄',
      name: '에쎄 스페셜 골드 1',
      name_en: 'Esse Special Gold 1mg',
      img: IMAGES.esse.special_gold_1mg,
      contry: 'korea',
    },
    {
      id: 16,
      type: '에쎄',
      name: '에쎄 스페셜 골드 0.5',
      name_en: 'Esse Special Gold 0.5mg',
      img: IMAGES.esse.special_gold_05mg,
      contry: 'korea',
    },
    {
      id: 17,
      type: '에쎄',
      name: '에쎄 센스 1',
      name_en: 'Esse Sense',
      img: IMAGES.esse.sense,
      contry: 'korea',
    },
    {
      id: 18,
      type: '에쎄',
      name: '에쎄 프라임',
      name_en: 'Esse Prime',
      img: IMAGES.esse.prime,
      contry: 'korea',
    },
    {
      id: 19,
      type: '에쎄',
      name: '에쎄 원',
      name_en: 'Esse One',
      img: IMAGES.esse.one,
      contry: 'korea',
    },
    {
      id: 20,
      type: '에쎄',
      name: '에쎄 클래식',
      name_en: 'Esse Classic',
      img: IMAGES.esse.classic,
      contry: 'korea',
    },
    {
      id: 21,
      type: '에쎄',
      name: '에쎄 아이스',
      name_en: 'Esse Ice',
      img: IMAGES.esse.ice,
      contry: 'korea',
    },
    {
      id: 22,
      type: '에쎄',
      name: '에쎄 아이스 1mg',
      name_en: 'Esse Ice 1mg',
      img: IMAGES.esse.ice_1mg,
      contry: 'korea',
    },
    {
      id: 23,
      type: '에쎄',
      name: '에쎄 프레쏘',
      name_en: 'Esse Presso',
      img: IMAGES.esse.presso,
      contry: 'korea',
    },
    {
      id: 24,
      type: '에쎄',
      name: '에쎄 수',
      name_en: 'Esse Su',
      img: IMAGES.esse.su,
      contry: 'korea',
    },
    {
      id: 25,
      type: '에쎄',
      name: '에쎄 수 0.5mg',
      name_en: 'Esse Su 0.5mg',
      img: IMAGES.esse.su_05mg,
      contry: 'korea',
    },
    {
      id: 26,
      type: '에쎄',
      name: '에쎄 수 0.1mg',
      name_en: 'Esse Su 0.1mg',
      img: IMAGES.esse.su_01mg,
      contry: 'korea',
    },
    {
      id: 27,
      type: '에쎄',
      name: '에쎄 엣지 1mg',
      name_en: 'Esse Edge 1mg',
      img: IMAGES.esse.edge,
      contry: 'korea',
    },
  ],
  the_one: [
    {
      id: 28,
      type: '더원',
      name: '더원 스카이',
      name_en: 'The One Sky',
      img: IMAGES.the_one.sky,
      contry: 'korea',
    },
    {
      id: 29,
      type: '더원',
      name: '더원 블루',
      name_en: 'The One Blue',
      img: IMAGES.the_one.blue,
      contry: 'korea',
    },
    {
      id: 30,
      type: '더원',
      name: '더원 오렌지',
      name_en: 'The One Orange',
      img: IMAGES.the_one.orange,
      contry: 'korea',
    },
    {
      id: 31,
      type: '더원',
      name: '더원 화이트',
      name_en: 'The One White',
      img: IMAGES.the_one.white,
      contry: 'korea',
    },
    {
      id: 32,
      type: '더원',
      name: '더원 임팩트',
      name_en: 'The One Impact',
      img: IMAGES.the_one.impact,
      contry: 'korea',
    },
    {
      id: 33,
      type: '더원',
      name: '더원 체인지',
      name_en: 'The One Change',
      img: IMAGES.the_one.change,
      contry: 'korea',
    },
  ],
  davidoff: [
    {
      type: '다비도프',
      name: '다비도프 리치블루',
      name_en: 'Davidoff Rich Blue',
      img: IMAGES.davidoff.blue,
      contry: 'korea',
    },
    {
      type: '다비도프',
      name: '다비도프 클래식',
      name_en: 'Davidoff Classic',
      img: IMAGES.davidoff.classic,
      contry: 'korea',
    },
  ],
  this: [
    {
      type: '디스',
      name: '디스 오리진',
      name_en: 'This Origin',
      img: IMAGES.this.origin,
      contry: 'korea',
    },
    {
      type: '디스',
      name: '디스 플러스',
      name_en: 'This Plus',
      img: IMAGES.this.plus,
      contry: 'korea',
    },
    {
      type: '디스',
      name: '아프리카 룰라',
      name_en: 'This Africa Rula',
      img: IMAGES.this.africa_rula,
      contry: 'korea',
    },
    {
      type: '디스',
      name: '아프리카 몰라',
      name_en: 'This Africa Mola',
      img: IMAGES.this.africa_mola,
      contry: 'korea',
    },
    {
      type: '디스',
      name: '아프리카 아이스잭',
      name_en: 'This Africa Ice Jack',
      img: IMAGES.this.africa_ice_jack,
      contry: 'korea',
    },
  ],
  raison: [
    {
      type: '레종',
      name: '레종 프렌치 썸',
      name_en: 'Raison French Ssom',
      img: IMAGES.raison.french_ssom,
      contry: 'korea',
    },
    {
      type: '레종',
      name: '레종 프렌치 ICE 블랑',
      name_en: 'Raison French Ice Blan',
      img: IMAGES.raison.french_ice_blan,
      contry: 'korea',
    },
    {
      type: '레종',
      name: '레종 프렌치 끌레오',
      name_en: 'Raison French Cieo',
      img: IMAGES.raison.french_cleo,
      contry: 'korea',
    },
    {
      type: '레종',
      name: '레종 프렌치 요고',
      name_en: 'Raison French Yogo',
      img: IMAGES.raison.french_yogo,
      contry: 'korea',
    },
    {
      type: '레종',
      name: '레종 프렌치 블랙',
      name_en: 'Raison French Black',
      img: IMAGES.raison.french_black,
      contry: 'korea',
    },
    {
      type: '레종',
      name: '레종 프렌치 폴라',
      name_en: 'Rasion French Pola',
      img: IMAGES.raison.french_pola,
      contry: 'korea',
    },
    {
      type: '레종',
      name: '레종 블랙',
      name_en: 'Rasion Black',
      img: IMAGES.raison.black,
      contry: 'korea',
    },
    {
      type: '레종',
      name: '레종 블루',
      name_en: 'Rasion Blue',
      img: IMAGES.raison.blue,
      contry: 'korea',
    },
    {
      type: '레종',
      name: '레종 휘바',
      name_en: 'Rasion Hyvaa',
      img: IMAGES.raison.hyvaa,
      contry: 'korea',
    },
    {
      type: '레종',
      name: '레종 아이스 프레쏘',
      name_en: 'Rasion Ice Presso',
      img: IMAGES.raison.ice_presso,
      contry: 'korea',
    },
    {
      type: '레종',
      name: '레종 썬 프레쏘',
      name_en: 'Rasion Sun Presso',
      img: IMAGES.raison.sun_presso,
      contry: 'korea',
    },
  ],
  bohem_cigar: [
    {
      type: '보헴 시가',
      name: '보헴 시가 아이스 핏',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.ice_fit,
      contry: 'korea',
    },
    {
      type: '보헴 시가',
      name: '보헴 시가 마스터',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.master,
      contry: 'korea',
    },
    {
      type: '보헴 시가',
      name: '보헴 시가 NO.1',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.no1,
      contry: 'korea',
    },
    {
      type: '보헴 시가',
      name: '보헴 시가 NO.3',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.no3,
      contry: 'korea',
    },
    {
      type: '보헴 시가',
      name: '보헴 시가 NO.6',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.no6,
      contry: 'korea',
    },
    {
      type: '보헴 시가',
      name: '보헴 시가 미니 1',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.mini_1mg,
      contry: 'korea',
    },
    {
      type: '보헴 시가',
      name: '보헴 시가 미니 5',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.mini_5mg,
      contry: 'korea',
    },
    {
      type: '보헴 시가',
      name: '보헴 쿠바나 더블',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.cubana_double,
      contry: 'korea',
    },
    {
      type: '보헴 시가',
      name: '보헴 쿠바나 샷',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.cubana_shot,
      contry: 'korea',
    },
    {
      type: '보헴 시가',
      name: '보헴 파이프 스코티',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.pipe_scottie,
      contry: 'korea',
    },
    {
      type: '보헴 시가',
      name: '보헴 슬림핏 화이트',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.slim_fit_white,
      contry: 'korea',
    },
    {
      type: '보헴 시가',
      name: '보헴 슬림핏 브라운',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.slim_fit_brown,
      contry: 'korea',
    },
    {
      type: '보헴 시가',
      name: '보헴 시가 카리브',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.caribe,
      contry: 'korea',
    },
    {
      type: '보헴 시가',
      name: '보헴 시가 리브레',
      name_en: 'Bohem_Cigar',
      img: IMAGES.bohem_cigar.libre,
      contry: 'korea',
    },
  ],
  simple: [
    {
      type: '심플',
      name: '심플 에이스 1mg',
      name_en: 'Simple Ace 1mg',
      img: IMAGES.simple.ace_1mg,
      contry: 'korea',
    },
    {
      type: '심플',
      name: '심플 클래식',
      name_en: 'Simple Classic',
      img: IMAGES.simple.classic,
      contry: 'korea',
    },
  ],
  cloud9: [
    {
      type: '클라우드 나인',
      name: '클라우드 나인 1',
      name_en: 'Colud9 1mg',
      img: IMAGES.cloud9.cloud9_1mg,
      contry: 'korea',
    },
    {
      type: '클라우드 나인',
      name: '클라우드 나인 5mg',
      name_en: 'Colud9 5mg',
      img: IMAGES.cloud9.cloud9_5mg,
      contry: 'korea',
    },
  ],
  timeless: [
    {
      type: '타임',
      name: '타임',
      name_en: 'Timeless Time Classic',
      img: IMAGES.timeless.time_classic,
      contry: 'korea',
    },
    {
      type: '타임',
      name: '타임 미드',
      name_en: 'Timeless Time Mid',
      img: IMAGES.timeless.time_mid,
      contry: 'korea',
    },
  ],
  empty: [
    {
      type: null,
      name: '88리턴즈',
      name_en: '88 Retuns',
      img: IMAGES.empty.retuns,
      contry: 'korea',
    },
    {
      type: null,
      name: '라일락',
      name_en: 'Lilac',
      img: IMAGES.empty.lilac,
      contry: 'korea',
    },
    {
      type: null,
      name: '시즌',
      name_en: 'Seasons',
      img: IMAGES.empty.seasons,
      contry: 'korea',
    },
    {
      type: '토니노 람보르기니',
      name: '아이스볼트 GT',
      name_en: 'Icevolt GT',
      img: IMAGES.empty.icevolt_gt,
      contry: 'korea',
    },
    {
      type: null,
      name: '한라산',
      name_en: 'Hallasan',
      img: IMAGES.empty.hallasan,
      contry: 'korea',
    },
  ],
};

const typesArr = [
  { name: 'esse', name_kr: '에쎄' },
  { name: 'the_one', name_kr: '더원' },
  { name: 'davidoff', name_kr: '다비도프' },
  { name: 'this', name_kr: '디스' },
  { name: 'raison', name_kr: '레종' },
  { name: 'bohem_cigar', name_kr: '보헴 시가' },
  { name: 'simple', name_kr: '심플' },
  { name: 'cloud9', name_kr: '클라우드 나인' },
  { name: 'timeless', name_kr: '타임리스' },
  { name: 'empty', name_kr: '없음' },
];

const Cigarette = () => {
  // 해당 showCigarette 은 view에서만 쓰이는것이기 때문에 해당 state는 cigarette component 가 아닌 child component인 view 에서 관리해줄것입니다.
  const [isHintImg, setIsHintImg] = useState(false);
  const [filterTypeList, setFilterTypeList] = useState([]);

  const toggleHintImg = () => setIsHintImg(!isHintImg);

  const insertFilter = (filterType) => {
    setFilterTypeList([...filterTypeList, filterType]);
  };
  const removeFilter = (filterType) => {
    const newFilterList = filterTypeList.filter((item) => item !== filterType);
    setFilterTypeList(newFilterList);
  };

  const toggleFilter = (allCheck) => {
    if (allCheck) {
      setFilterTypeList([]);
      return;
    }

    const types = typesArr.map((item) => item.name);

    setFilterTypeList(types);
    return;
  };

  // 추가할 담배 타입을 지정하는 함수 입니다.
  const handleWhiteListTypes = (e) => {
    if (e.target.checked) {
      console.log(`[ ${e.target.name} ] type 추가 되었습니다.`);
      insertFilter(e.target.name);

      return;
    }

    console.log(`[ ${e.target.name} ] type 이 삭제 되었습니다.`);
    removeFilter(e.target.name);

    return;
  };

  return (
    <div className='cigarette'>
      <header className='cigarette-header'></header>
      <div className='cigarette-body'>
        <View cigaretteOBJ={cigaretteOBJ} filterTypeList={filterTypeList} isHintImg={isHintImg} />
        <Option
          typesArr={typesArr}
          handleWhiteListTypes={handleWhiteListTypes}
          toggleHintImg={toggleHintImg}
          toggleFilter={toggleFilter}
        />
      </div>
    </div>
  );
};

export default Cigarette;
