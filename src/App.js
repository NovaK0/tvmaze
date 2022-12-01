import './App.css';
import {useEffect,useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/home/Home';
import { Details } from './components/Details';
import { Body } from './components/home/Body';




function App() {



  return (
     <div className='App'>
       <div className='navbar'>
       <div className='big_text'>TV Maze</div>
        </div>

     <BrowserRouter>
     <Routes>
         <Route index element={<Home/>} /> 
         <Route path="/Details/:id" element={<Details/>} /> 
     </Routes>
   </BrowserRouter>


    </div>
      
  
  );
}

export default App;
