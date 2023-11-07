import './App.css';
import { Routes,Route} from "react-router-dom" //dependence 
import 'flowbite';
//Components 
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Cources from './Components/Cources';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Cources' element={<Cources/>}/>

       </Routes>
    </div>
  );
}

export default App;
