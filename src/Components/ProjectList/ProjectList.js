import React from "react";
import { Row, Col } from "antd";
import ProjectCard from "../ProjectCard/ProjectCard";

const projectData = [
    {
        projectName : "Patient Care+",
        projectLogo : "dpc.png",
        projectDescription: "Patient Care Plus is a digital adoption to enhance patient experience and medication compliance for rare disease, immuno-oncology, and chronic conditions. It acts as an omnichannel patient onboarding and engagement platform.",
        projectResponsibilities: [
            "Built the application from scratch.",
            "Developed the web application using React, Redux Toolkit, Tailwind CSS and Material UI components.",
            "Closely worked with scrum team and product owners to create a sustainable roadmap for product scalability.",
            "Worked with core business team for deciding the product strategies."

        ]
    },
    {
        projectName : "eZHealth",
        projectLogo : "ezhealth.png",
        projectDescription: "eZHealth is designed to cater all the healthcare requirements of an user from a single place including Teleconsultation with doctors, ordering medicines, get any lab and diagnostic test done, get the COVID-19 vaccination, get the COVID-19 test done and generate the report, get the other generic vaccination done e.g flu, pneumonia etc,consultation with mental wellness coaches and psychologists. This application can even let the user check their health symptoms using the intelligent health bot just by a fingertip. Basically it offers a complete end-to-end healthcare solution to the patients.",
        projectResponsibilities: [
            "Built the application from scratch.",
            "Lead a cross-functional team of web, mobile and backend engineers to build the application ecosystem.",
            "Developed various modules of the web application using NextJS (React), Strapi, Golang and GraphQL.",
            "Closely worked with scrum team and product owners to create a sustainable roadmap for product scalability.",
            "Worked with core business team for deciding the product strategies.",
            "Successfully migrated the entire application from version 1 to version 2 (revamped version)."

        ]
    },
    {
        projectName : "eZHealth Shop",
        projectLogo : "ezhealth.png",
        projectDescription: "eZHealth Shop is the sub-module of the eZHealth application eco-system being a full-fledged e-commerce product. It is designed to cater consumers' requirement of ordering wide range of medicines and healthcare products from multiple seller partners across Philippines. Later there is a plan of market expansion to other south asian countries.",
        projectResponsibilities: [
            "Created the product architecture after multiple sessions with the business stakeholders, product owners, development team and seller partners.",
            "Decided the tech stack for the application and designed user journey flow.",
            "Designed the application ecosystem using sitecore orderclould,React,Flutter (Only for mobile app), Golang and Azure app services.",
            "Closely worked with scrum team and product owners to create a sustainable roadmap for product scalability."
        ]
    },
    {
        projectName : "eZTrade",
        projectLogo : "knovva.png",
        projectDescription: "eZTrade is an application which is built primarily for the sales representatives in healthcare industry to establish the solid communication between their zonal managers and business units. This application is designed to assign clients, targets and goals for each sales representative by their managers.",
        projectResponsibilities: [
            "Built the application from scratch.",
            "Led a cross-functional team of web, mobile and backend engineers to build the application ecosystem.",
            "Developed various modules of the web application using NextJS (React),Strapi, Golang and GraphQL.",
            "Closely worked with scrum team and product owners to create a sustainable roadmap for product scalability.",
            "Worked with core business team for deciding the product strategies."
        ]
    },
    {
        projectName : "Zuellig Pharma Analytics",
        projectLogo : "zp_analytics.png",
        projectDescription: "Zuellig Pharma Analytics is a data driven platform for the business users of Zuellig Pharma, the leading healthcare company in south-east Asia. This platform helps the organization to take crucial business decision based on the sales and supply chain data segmented by several factors.",
        projectResponsibilities: [
            "Built the application from scratch.",
            "Integrated Tableau for complex data representation.",
            "Developed both the frontend and backend of the application using React and NodeJS respectively.",
            "Used Socket channel and Redis for displaying real time data across different business and therapeutics regions."
        ]
    },
    {
        projectName : "Knovva Academy",
        projectLogo : "knovva.png",
        projectDescription: "Knovva Academy is an online learning solution with the aim of transforming students into leaders with digital and experiential learning designed for the demands of the 21st century. It is a experimental classroom environment based with lessons. It’s frontend is built with React and the backend is built with NodeJS and MongoDB is being used as database. It is hosted on AWS.",
        projectResponsibilities: [
            "Built the application from scratch.",
            "Worked in core JavaScript libraries, JQuery, HTML, CSS to develop complex UI/UX and extensively interactive UI components.",
            "Handled the deployment of the application using TravisCI and AWS.",
            "Continuously synced up with mobile and backend team for any development and support activities."
        ]
    },
    {
        projectName : "Catchletter",
        projectLogo : "catchletter.jpg",
        projectDescription: "CatchLetter is the smart way to manage every single email subscriptions and newsletters, It’s front-end is built with React and the backend is built with NodeJS, We have been using ExpressJS framework for the backend and MongoDB as the database. It is a live project and it is hosted on custom ubuntu server.",
        projectResponsibilities: [
            "Built the application from scratch.",
            "Worked on MERN stack (React, Express, NodeJS, MongoDB) to develop both frontend and backend application.",
            "Handled the deployment in custom ubuntu server.",
            "Closely worked with business and product team for the implementation of new modules and features."
        ]
    },
    {
        projectName : "Marketsworld",
        projectLogo : "marketsword.png",
        projectDescription: "MarketsWorld is an online trading platform built on Ruby on Rails, founded with a single mission – to make the world of trading in financial markets more approachable to everyone. Owned and operated by MarketsTheWorld Limited in the Isle of Man, we managed to become leaders in the online trading industry. We support trading in a safe and regulated environment and therefore are licensed and regulated by the Isle of Man Gambling Supervision Commission.",
        projectResponsibilities: [
            "Worked on RoR stack (Ruby on Rails) to develop both frontend and backend application.",
            "Developed the module to cater all analytical needs for the business behind.",
            "Used RoR, PostgreSQL, Redis and AWS as the application stack.",
            "Closely worked with business and product team for the implementation of new modules and features."
        ]
    },
    {
        projectName : "IndustryPrime",
        projectLogo : "industryprime.png",
        projectDescription: "Industry Prime is an SEM (SaaS Enabled Marketplace) built on Ruby on Rails, it is a complete procurement ecosystem for businesses to help them better manage their purchase through its cloud-based SaaS Purchase Management Software and assisting them with their end to end procurement.",
        projectResponsibilities: [
            "Developed the core product from scratch, which is SEM (Software Enabled Marketplace) for procurement and supply chain management.",
            "Experience of working on Ruby on Rails as the main framework for the application.",
            "Prepared the architecture for successive phases of development and release life cycle.",
            "Experience of working in a startup company starting from its early stage."
        ]
    }

];

const ProjectList = () => {
    return (
        <>
            <Row className="pb-10">
                <Col span={24} className="flex justify-center items-center">
                    <span>
                        <p className="body-font font-cookie text-5xl">My Portfolio</p>
                    </span>
                </Col>
            </Row>

            {
                projectData.map((item, i) => {
                    return(
                        <ProjectCard data={item} key={i}/>
                    )

                })
            }
        </>
    )
}

export default ProjectList;
