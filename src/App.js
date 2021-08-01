import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Profile from './Pages/Profile'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      </div>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default App;
