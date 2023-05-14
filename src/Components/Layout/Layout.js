import React from "react";
import {
    Routes,
    Route,
  } from 'react-router-dom';
import Home from "../../Pages/Home/Home";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import PageNotFound from "../PageNotFound/PageNotFound";

const Layout = () => {
    return (
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='portfolio' element={< Portfolio />}></Route>
            <Route path='*' element={<PageNotFound/>} />
        </Routes>
    )
}

export default Layout;
