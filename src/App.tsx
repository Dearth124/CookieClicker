import './App.css';
import { ButtonWithText } from './Button/ButtonWithText';
import { Cookie } from './CookieClicker/Cookie';
import { Timer } from './Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        <Cookie
        />
      </header>
    </div>
  );
}

export default App;