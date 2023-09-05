import './App.css';
import { Routes,Route} from "react-router-dom" //dependence 

//Components
import Home from './Components/Home';
import DashBoard from './Components/DashBoard';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Dashboard' element={<DashBoard/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/About' element={<AboutUs/>} />
        <Route path='/Portfolio' element={<Portfolio/>} />
      </Routes>
    </div>
  );
}

export default App;
