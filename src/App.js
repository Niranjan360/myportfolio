import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
