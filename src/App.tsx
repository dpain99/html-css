import './App.css';
import Main from './components/layout/Main';
import Theme from './components/theme/Theme';


function App() {
  return (
    <div className="App">
      <Theme>
        <header className="App-header">
          <Main />
        </header>
      </Theme>
    </div>
  );
}

export default App;
