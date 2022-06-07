import './App.css';
import Cigarette from './components/Cigarette';

// 시간 초를 잰다
// 랜덤으로 담배 이름이 나온다.
// 본인이 직접 담배를 기입할수있게 만든다. (서비스를 한다면 x)

function App() {
  return (
    <div className='App'>
      <Cigarette />
    </div>
  );
}

export default App;
