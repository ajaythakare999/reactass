import {useMemo, useState } from "react";
import React from "react";

function User1(){


   const [data,setData]=useState({
            
        id:new Date().getTime().toString(),
        name:"",
        middle:"",
        last:"",
        age:"",
        state:"",
        village:"",
        district:"",
        pin:"",
        cattle_number:"",
        milk_number:""
  
 });
 let [res,setRes]=useState([]);
   
const handleInp=(e)=>{

  let val= e.target.value;
    let nam=e.target.name;
  
  setData({...data,[nam]:val});
  }

       const addDAta =  useMemo(()=>{
          localStorage.setItem('list',JSON.stringify(res))
                   
        },[res])
     
    return(
        <>

            <input type="text" className="a 1 " name="name" value={data.name} placeholder="first name" onChange={handleInp}></input>
                <input type="text" className="a 2" name="middle"value={data.middle} placeholder="middle name" onChange={handleInp}></input>
                <input type="text" className="a 3" name="last" value={data.last} placeholder="last name" onChange={handleInp}></input>
                <input type="number" className="a 4" name="age" value={data.age} placeholder="age" onChange={handleInp}></input>

                <select name="state" className="a 5" value={data.state} onChange={handleInp}>
                <option>goa</option>
                <option>up</option>
                <option>mp</option>
                <option>maharashtra</option>
                
                
                </select>
                <input type="text" className="a 6" name="village" value={data.village} placeholder="village name" onChange={handleInp}></input>
                <input type="text"className="a 7"  name="district" value={data.district} placeholder="district name" onChange={handleInp}></input>
                <input type="number" className="a 8" name="pin"  placeholder="pin code" onChange={handleInp}></input>
                <input type="number" className="a 9" name="cattle_number" value={data.cattle_number} placeholder="number of cattle" onChange={handleInp}></input>
                <input type="number" className="a 10" name="milk_number" value={data.milk_number} placeholder="milk produce no" onChange={handleInp}></input>
               
                 <button className="a 11" onClick={()=>{

                    console.log(res)
                   
                    
                      setRes([...res,data]);
                      addDAta();
                     

                }}>add</button>
                <a className="a 12" href="/user2">search</a>

        </>
    )

}

export default User1;