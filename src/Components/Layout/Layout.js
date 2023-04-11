import React from "react";
import {
    Routes,
    Route,
  } from 'react-router-dom';
import Home from "../../Pages/Home/Home";
import Portfolio from "../../Pages/Portfolio/Portfolio";


const Layout = () => {
    return (
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/portfolio' element={< Portfolio />}></Route>
        </Routes>
    )
}

export default Layout;
