import React from "react";
import Introduction from "../Introduction/Introduction";
import Skillset from "../Skillset/Skillset";
import Academics from "../Academics/Academics";
import Projects from "../Projects/Projects";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import Companies from "../Companies/Companies";
import Publications from "../Publications/Publications";
import Contact from "../Contact/Contact";

const Content = () => {

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

export default Content;
