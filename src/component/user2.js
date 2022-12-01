import React, { useState } from "react";




function User2(){

    const [rec,setRec]=useState();
    let resu='';
    

   
    function demo(){

      resu=JSON.parse(localStorage.getItem('list'));
    // console.log(result);
     
    
   
    }
   demo();

 
   
    return(
        <>
                <input list="data" placeholder="enter three letter of last name" onChange={(e)=>{
                   setRec(e.target.value);
                }} />
                <datalist id="data"> {resu.map((dat)=>{
                    return(<option>{dat.last}</option>)
                })}
               
               </datalist>
               
                
              
               
        
        </>
    ) ;
}
export default User2;