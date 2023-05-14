import React from "react";
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const navigate = useNavigate();

    const navigateToPortfolio = () => {
        if (!window.location.href.includes("/portfolio")){
            navigate('/portfolio');
        }
    }

    return(
        <header className="flex-row w-full flex font-bold p-6 body-font font-ubuntu items-center">
            <div className="flex justify-end w-full items-center">
                <span>
                    <button className="bg-black text-white" onClick={()=> navigateToPortfolio()}  style={{fontFamily: "cookie", border: "2px solid black", borderRadius: "1px", fontSize: "20px", boxSizing: "initial", height: "40px", width: "90px"}}>Portfolio</button>
                </span>
            </div>
        </header>
    )
}
export default Header;
