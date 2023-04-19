import React from "react";
import {
    Routes,
    Route,
  } from 'react-router-dom';
import Home from "../../Pages/Home/Home";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Dashboard from "../../Pages/Admin/Dashboard/Dashboard";
import Login from "../../Pages/Admin/Login/Login";

const Layout = () => {
    return (
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/portfolio' element={< Portfolio />}></Route>
            <Route exact path='/admin' element={< Login />}></Route>
            <Route exact path='/admin/dashboard' element={< Dashboard />}></Route>
        </Routes>
    )
}

export default Layout;
