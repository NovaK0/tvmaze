import React from 'react'
import {useEffect,useState} from "react"
import {useNavigate} from 'react-router-dom'
import './home.css'
export const Home = () => {
  const navigate=useNavigate();

    const [Data,SetData]=useState();
  
    useEffect(() => {
    
      const func=async()=>{
    
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(response => response.json())
        .then(data =>{
          SetData(data);
          // console.log(Data);
        });
    
      }
    
      func();
     
      
    
      
    }, [])

    const navigateButton=(e)=>{
      navigate("/details/"+e);

    }
    
  return (
    <div className='home_wrapper'>
    

<div className='card_wrapper'>
  <div className='w-100 display-6'>Shows</div>

  {Data && Data.map((e)=>{
    return(
      
      <div className='card_main'>
      <div className='upper'>
        <img src={e.show.image.medium} alt="fd" className='res'/>
      </div>
      <div className='lower'>
        <div>Name: {e.show.name}</div>
        <div>Genre: {e.show.genres[0]}</div>
        <div>Rating: {e.show.rating.average}</div>
        <div>Language: {e.show.language}</div>
        <div className='p-1 w-100 m-1'>
        <button type="button" class="btn btn-light" onClick={()=>{navigateButton(e.show.id)}}>More Info</button>
        </div>
      </div>
  
    </div>
    )
  })}

 



</div>
    </div>
  )
}
