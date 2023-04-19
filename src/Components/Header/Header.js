import React from "react";
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const navigate = useNavigate();


    const downloadResume = () => {
        const element = document.createElement("a");
        element.href = "assets/Files/Abhradip_Ghosh_Software_Engineer.pdf";
        element.download = "Abhradip_Ghosh_Software_Engineer.pdf";
        element.click();
    }

    const scrollToContactSection = () => {
        const section = document.querySelector( '#contact-me' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    return(
        <header className="flex-row w-full flex font-bold p-6 body-font font-ubuntu items-center">
            <div className="flex justify-end w-full items-center">
                <span className="pr-8">
                    <p onClick={() => downloadResume()} className="font-courier text-s underline" style={{cursor: "pointer"}}>Download Resume</p>
                </span>
                <span className="pr-8">
                    <button onClick={() => scrollToContactSection()} style={{fontFamily: "cookie", border: "2px solid black", borderRadius: "1px", fontSize: "20px", boxSizing: "initial", height: "40px", width: "90px"}}>Contact</button>
                </span>
                <span>
                    <button className="bg-black text-white" onClick={()=> navigate("/portfolio")}  style={{fontFamily: "cookie", border: "2px solid black", borderRadius: "1px", fontSize: "20px", boxSizing: "initial", height: "40px", width: "90px"}}>Portfolio</button>
                </span>
            </div>
        </header>
    )
}
export default Header;
