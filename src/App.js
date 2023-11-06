import './App.css';
import { Routes,Route} from "react-router-dom" //dependence 
import Navbar from './SubComponents/Navbar';
import Section from './SubComponents/Section';
import 'flowbite';
import Slider from './SubComponents/Slider';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section/>
      <Slider/>
    </div>
  );
}

export default App;
