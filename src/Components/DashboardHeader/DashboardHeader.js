import React from "react";
import { useNavigate } from "react-router-dom";


const DashboardHeader = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/admin");
    }
    return (
        <>
            <div className="bg-white flex flex-row m-4 h-16 drop-shadow-lg justify-end items-center">
               <span className="flex pr-4" onClick={() => handleLogout()}>
                    <p className="body-font font-josefin-sans text-base">
                        Logout
                    </p>
               </span>
            </div>
        </>
    )

}

export default DashboardHeader;

