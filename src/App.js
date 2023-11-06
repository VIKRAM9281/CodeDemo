import './App.css';
import { Routes,Route} from "react-router-dom" //dependence 
import Navbar from './SubComponents/Navbar';
import Section from './SubComponents/Section';
import 'flowbite';
import Slider from './SubComponents/Slider';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
<Home/>
    </div>
  );
}

export default App;
