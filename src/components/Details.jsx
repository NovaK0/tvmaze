import React, { useState } from 'react'
import './details.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'


export const Details = () => {

  const [Data, setData] = useState();

  const [name,setName]=useState();
  const [contact,setContact]=useState();
  const [total,setTotal]=useState();
  let { id } = useParams();

  useEffect(() => {

    const func = async () => {

      fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          for (let i = 0; i < data.length; i++) {
            // console.log(data[i].show.id);
            if (parseInt(id) === data[i].show.id) {
              setData(data[i]);
              // console.log("wew");
              break;
            }
          }

        });

    }

    func();




  }, [])

  const ticketBook=()=>{
    // e.preventDefault();
    document.getElementById("ticket").style.display="flex";
  }
  const ticketBook1=()=>{
    console.log("asda");
    document.getElementById("ticket").style.display="none";
  }

  const submitData=()=>{

      if(name=="" || contact=="" || total=="")
      {
        alert("please fill all the details");
      }
      else{
        alert("congratulations.... your ticket has been booked");
        document.getElementById("ticket").style.display="none";
        localStorage.setItem("name",name);
        localStorage.setItem("contact",contact);
        localStorage.setItem("totalTicket",total);
      }


  }


  return (



    <div className='wrapper'>



      {Data ?
        <>
        <div className='ticket_popup' id="ticket">
        <div className='ticket_wrapper'>
          {/* <div className='display-6'>Name</div> */}

          <div>   <button type="button" class="btn btn-dark m-2" style={{ fontSize: "1.4rem" }} onClick={()=>ticketBook1()}>close</button>
</div>
          <div><b>Name: </b>{Data.show.name}</div>
              {/* <div><b>Run Time: </b>{Data.show.genres.averageRuntime}</div> */}
              <div><b>Language: </b>{Data.show.language}</div>
              <div><b>Genre: </b>{Data.show.genres[0]}</div>
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name" onChange={e=>setName(e.target.value)}/>
          </div>
          <div class="form-group">
            <label for="contact">contact No.</label>
            <input type="number" class="form-control" id="contact" placeholder="Contact No" onChange={e=>setContact(e.target.value)}/>
          </div>
          <div class="form-group">
            <label for="contact">Total Tickets</label>
            <input type="number" class="form-control" id="contact" placeholder="Total Tickets" min={1} max={10} onChange={e=>setTotal(e.target.value)} />
          </div>


          <button type="submit" class="btn btn-primary" onClick={()=>submitData()}>Book</button>
        </div>
      </div>
          <div className='w-75 display-5 row align-items-start '>{Data.show.name}</div>
          <div className='summary'>
            <div>
              <img src={Data.show.image.medium} alt="ff" className='res' />
            </div>
            <div style={{ overflowY: "auto" }}>
              {/* <div className='display-6'>summary</div> */}
              {Data.show.summary + ""}
            </div>
          </div>
          <div className='other'>

            <div>
              <div><b>Name: </b>{Data.show.name}</div>
          
              <div><b>Language: </b>{Data.show.language}</div>
              <div><b>Genre: </b>{Data.show.genres[0]}</div>
            </div>
            <div>

              <table>
                <tr>
                  <th>Episode</th>
                  <th>Link</th>
                </tr>

                <tr>
                  <td>Previous Episode</td>
                  <td><a href={Data.show._links.previousepisode.href}>Here</a></td>
                </tr>


              </table>

            </div>


          </div>

          <button type="button" class="btn btn-dark m-2" style={{ fontSize: "1.4rem" }} onClick={()=>ticketBook()}>Book Ticket</button>
        </>
        :

        <div>error no data found</div>

      }




    </div>
  )
}
