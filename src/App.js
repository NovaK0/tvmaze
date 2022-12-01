import './App.css';
import {useEffect,useState} from "react"
import {Routes, Route, HashRouter,BrowserRouter  } from "react-router-dom";
import { Home } from './components/home/Home';
import { Details } from './components/Details';
function App() {



  return (
     <div className='App'>
       <div className='navbar'>
       <div className='big_text'>TV Maze</div>
        </div>
    <HashRouter>
     <Routes>
         <Route exact path="/" element={<Home/>} /> 
         <Route exact path="/Details/:id" element={<Details/>} /> 
     </Routes>
    </HashRouter>


    </div>
      
  
  );
}

export default App;
