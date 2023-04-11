import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";
import PortfolioContent from "../../Containers/PortfolioContent/PortfolioContent"


const Portfolio = () => {
    return(
        <>
            <Header/>
            <PortfolioContent/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Portfolio;
