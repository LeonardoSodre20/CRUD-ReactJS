import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Main from "./Pages/Main";

function App () {
  return (
     <div>
       <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/main" element={<Main></Main>}></Route>
      </Routes>
     </div>
  )
}

export default App