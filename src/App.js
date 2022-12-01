
import './App.css';
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import User1 from './component/user1.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User2 from './component/user2.js'
import User3 from './component/user3.js'


function App() {


  return (
    <>

        <BrowserRouter>
              <Routes>
                <Route path="/" element={<User1/>} />
                <Route path="/user2" element={<User2/>} />
                <Route path="/user3" element={<User3/>} />
               
                 
              </Routes>
            </BrowserRouter>
    
    
     
    
      
    </>
  );
    
      

       
}

export default App;
