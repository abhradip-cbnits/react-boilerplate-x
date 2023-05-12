import React, {useContext} from "react";
import { DashboardContext } from "../../Contexts/DashboardContext";


const DashboardHeader = () => {

    const { handleLogout } = useContext(DashboardContext);
    return (
        <>
            <div className="bg-white flex flex-row m-4 h-[10vh] drop-shadow-lg justify-end items-center">
               <span className="flex pr-4" onClick={() => handleLogout()} style={{cursor: "pointer"}}>
                    <p className="body-font font-josefin-sans text-base">
                        Logout
                    </p>
               </span>
            </div>
        </>
    )

}

export default DashboardHeader;

