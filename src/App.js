import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <h1>React router</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
