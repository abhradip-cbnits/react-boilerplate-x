import React from "react";
import Introduction from "../../Components/Introduction/Introduction";
import Skillset from "../../Components/Skillset/Skillset";
import Academics from "../../Components/Academics/Academics";
import Projects from "../../Components/Projects/Projects";
import GeneralInfo from "../../Components/GeneralInfo/GeneralInfo";
import Companies from "../../Components/Companies/Companies";
import Publications from "../../Components/Publications/Publications";
import Contact from "../../Components/Contact/Contact";

const HomeContent = () => {
    return(
        <>
            <Introduction/>
            <Skillset/>
            <Companies/>
            <Projects/>
            <Academics/>
            <Publications/>
            <GeneralInfo/>
            <Contact/>
        </>
    )
}

export default HomeContent;
