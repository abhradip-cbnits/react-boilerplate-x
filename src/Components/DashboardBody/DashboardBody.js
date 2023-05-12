import React, {useContext, useEffect, useState} from "react";
import { useDispatch } from 'react-redux';
import { getIntroduction , getCompanies, getProject, getHobbies, getPublications} from '../../Redux/Features/information';
import { getProjectList } from '../../Redux/Features/portfolio';
import { unwrapResult } from '@reduxjs/toolkit';
import { DashboardContext } from "../../Contexts/DashboardContext";
import toast, {Toaster} from 'react-hot-toast';
import { decodeToken, isExpired } from "react-jwt";

import IntroductionEditionArea from "../EditionArea/IntroductionEditionArea/IntroductionEditionArea";
import CompaniesEditionArea from "../EditionArea/CompaniesEditionArea/CompaniesEditionArea";
import ProjectsEditionArea from "../EditionArea/ProjectsEditionArea/ProjectsEditionArea";
import HobbiesEditionArea from "../EditionArea/HobbiesEditionArea/HobbiesEditionArea";
import PublicationsEditionArea from "../EditionArea/PublicationsEditionArea/PublicationsEditionArea";
import PortfolioEditionArea from "../EditionArea/PortfolioEditionArea/PortfolioEditionArea";


const DashboardBody = () => {
    const [introductionContent, setIntroductionContent] = useState(null);
    const [projectContent, setProjectContent] = useState(null);
    const [companyContent, setCompanyContent] = useState(null);
    const [portfolioContent, setPortfolioContent] = useState(null);
    const [publicationContent, setPublicationContent] = useState(null);
    const [hobbiesContent, setHobbiesContent] = useState(null);

    const token = localStorage.getItem("jwt");
    const decodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);
    const { activeMenuItem , handleLogout } = useContext(DashboardContext);
    const dispatch = useDispatch();


    useEffect(()=>{

        if(decodedToken && decodedToken?.user === localStorage.getItem("user")){
            if(!isMyTokenExpired){
                switch(activeMenuItem.value){
                    case 'Introduction':
                        dispatch(getIntroduction())
                        .then(unwrapResult)
                        .then((result)=>{
                            setIntroductionContent(result?.data?.data?.description?.data);
                        })
                        .catch((e)=> {
                            toast.error('Something went wrong')
                        })
                        break;
                    case 'Projects':
                        dispatch(getProject())
                        .then(unwrapResult)
                        .then((result)=>{
                            setProjectContent(result?.data?.data?.description?.data);

                        })
                        .catch((e)=> {
                            toast.error('Something went wrong')
                        })
                        break;
                    case 'Companies':
                        dispatch(getCompanies())
                        .then(unwrapResult)
                        .then((result)=>{
                            setCompanyContent(result?.data?.data?.description);
                        })
                        .catch((e)=> {
                            toast.error('Something went wrong')
                        })
                        break;
                    case 'Portfolio':
                        dispatch(getProjectList())
                        .then(unwrapResult)
                        .then((result)=>{
                            setPortfolioContent(result?.data?.data);
                        })
                        .catch((e)=> {
                            toast.error('Something went wrong')
                        })
                        break;
                    case 'Publications':
                        dispatch(getPublications())
                        .then(unwrapResult)
                        .then((result)=>{
                            setPublicationContent(result?.data?.data?.description);
                        })
                        .catch((e)=> {
                            toast.error('Something went wrong')
                        })
                        break;
                    case 'Hobbies':
                        dispatch(getHobbies())
                        .then(unwrapResult)
                        .then((result)=>{
                            setHobbiesContent(result?.data?.data)
                        })
                        .catch((e)=> {
                            toast.error('Something went wrong')
                        })
                        break;

                }
            }else{
                handleLogout();
                toast.success('Logged out successfully.');
            }
        }else{
            handleLogout();
            toast.success('Logged out successfully.');
        }
    },[activeMenuItem])

    return (
        <>
             <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="bg-white h-[71vh] ml-4 mr-4 drop-shadow-lg flex flex-col overflow-y-scroll">
                <div className="flex p-4 w-full">
                    <span>
                        <p className="body-font font-josefin-sans text-2xl" style={{color: "#1677ff"}}>Content Management - {activeMenuItem?.value}</p>
                    </span>
                </div>
                {
                    activeMenuItem?.value === 'Introduction'?
                        <IntroductionEditionArea content={introductionContent}/>
                    :
                    activeMenuItem?.value === 'Companies'?
                        <CompaniesEditionArea content={companyContent}/>
                    :
                    activeMenuItem.value === 'Projects'?
                        <ProjectsEditionArea content={projectContent}/>
                    :
                    activeMenuItem.value === 'Portfolio'?
                        <PortfolioEditionArea content={portfolioContent}/>
                    :
                    activeMenuItem.value === 'Publications'?
                        <PublicationsEditionArea content={publicationContent}/>
                    :
                    activeMenuItem.value === 'Hobbies'?
                        <HobbiesEditionArea content={hobbiesContent}/>
                    :
                    null

                }
            </div>
        </>
    )

}

export default DashboardBody;
