import './App.css';
import { CryptoFeed } from './components/CryptoFeed';

function App() {

  return (
    <div id='root'>
      <div className="coin-app">
        <CryptoFeed />
      </div>
    </div>
  );
}

export default App;
