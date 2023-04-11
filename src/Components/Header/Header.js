import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "antd";


const Header = () => {
    const navigate = useNavigate();
    return(
        <header className="flex-row w-full flex font-bold p-6 body-font font-ubuntu items-center">
            <div className="flex justify-end w-full items-center">
                <span className="pr-8">
                    <Button style={{fontFamily: "cookie", border: "2px solid black", borderRadius: "1px", fontSize: "20px", boxSizing: "initial"}}>Contact</Button>
                </span>
                <span>
                    <Button onClick={()=> navigate("/portfolio")}  style={{fontFamily: "cookie", border: "2px solid black", borderRadius: "1px", fontSize: "20px", boxSizing: "initial"}}>Portfolio</Button>
                </span>
            </div>
        </header>
    )
}
export default Header;
