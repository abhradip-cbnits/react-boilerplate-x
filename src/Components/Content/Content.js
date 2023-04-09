import React from "react";
import Introduction from "../Introduction/Introduction";
import Skillset from "../Skillset/Skillset";
import Academics from "../Academics/Academics";
import Projects from "../Projects/Projects";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import Companies from "../Companies/Companies";
import Publications from "../Publications/Publications";

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
        </>
    )
}

export default Content;
