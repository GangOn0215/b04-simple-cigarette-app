import axios from 'axios';
import React, { useEffect } from 'react';

import './App.css';

import Cigarette from './components/Cigarette';

// CREATE : 본인이 직접 담배를 기입할수있게 만든다. (서비스를 한다면 x)
// READ   : 담배 데이터를 상세 보기를 할수있게 만든다.
// UPDATE : 담배 데이터를 수정할수 있게 만든다.
// DELETE : 해당 담배 데이터를 삭제 할수있게 만든다.

function App() {
  const callApi = async () => {
    axios.get('/api').then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className='App'>
      <Cigarette />
    </div>
  );
}

export default App;
