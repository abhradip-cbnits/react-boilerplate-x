import React from "react";
import { Row, Col } from "antd";
import ProjectCard from "../ProjectCard/ProjectCard";

const projectData = [
    {
        projectName : "Patient Care",
        projectLogo : "dpc.png",
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
        projectDescription: "eZHealth Shop is the sub-module of the eZHealth application eco-system being a full-fledged e-commerce product. It is designed to cater consumers' requirement of ordering wide range of medicines and healthcare products from multiple seller partners across Philippines. Later there is a plan of market expansion to other south asian countries.",
        projectResponsibilities: [
            "Created the product architecture after multiple sessions with the business stakeholders, product owners, development team and seller partners.",
            "Decided the tech stack for the application and designed user journey flow.",
            "Designed the application ecosystem using sitecore orderclould,React,Flutter (Only for mobile app), Golang and Azure app services.",
            "Closely worked with scrum team and product owners to create a sustainable roadmap for product scalability."
        ]
    },
    {
        projectName : "Knovva Academy",
        projectLogo : "knovva.png",
        projectDescription: "eZHealth Shop is the sub-module of the eZHealth application eco-system being a full-fledged e-commerce product. It is designed to cater consumers' requirement of ordering wide range of medicines and healthcare products from multiple seller partners across Philippines. Later there is a plan of market expansion to other south asian countries.",
        projectResponsibilities: [
            "Created the product architecture after multiple sessions with the business stakeholders, product owners, development team and seller partners.",
            "Decided the tech stack for the application and designed user journey flow.",
            "Designed the application ecosystem using sitecore orderclould,React,Flutter (Only for mobile app), Golang and Azure app services.",
            "Closely worked with scrum team and product owners to create a sustainable roadmap for product scalability."
        ]
    },
    {
        projectName : "Catchletter",
        projectLogo : "catchletter.jpg",
        projectDescription: "eZHealth Shop is the sub-module of the eZHealth application eco-system being a full-fledged e-commerce product. It is designed to cater consumers' requirement of ordering wide range of medicines and healthcare products from multiple seller partners across Philippines. Later there is a plan of market expansion to other south asian countries.",
        projectResponsibilities: [
            "Created the product architecture after multiple sessions with the business stakeholders, product owners, development team and seller partners.",
            "Decided the tech stack for the application and designed user journey flow.",
            "Designed the application ecosystem using sitecore orderclould,React,Flutter (Only for mobile app), Golang and Azure app services.",
            "Closely worked with scrum team and product owners to create a sustainable roadmap for product scalability."
        ]
    },
    {
        projectName : "Marketsworld",
        projectLogo : "marketsword.png",
        projectDescription: "eZHealth Shop is the sub-module of the eZHealth application eco-system being a full-fledged e-commerce product. It is designed to cater consumers' requirement of ordering wide range of medicines and healthcare products from multiple seller partners across Philippines. Later there is a plan of market expansion to other south asian countries.",
        projectResponsibilities: [
            "Created the product architecture after multiple sessions with the business stakeholders, product owners, development team and seller partners.",
            "Decided the tech stack for the application and designed user journey flow.",
            "Designed the application ecosystem using sitecore orderclould,React,Flutter (Only for mobile app), Golang and Azure app services.",
            "Closely worked with scrum team and product owners to create a sustainable roadmap for product scalability."
        ]
    },
    {
        projectName : "IndustryPrime",
        projectLogo : "industryprime.png",
        projectDescription: "eZHealth Shop is the sub-module of the eZHealth application eco-system being a full-fledged e-commerce product. It is designed to cater consumers' requirement of ordering wide range of medicines and healthcare products from multiple seller partners across Philippines. Later there is a plan of market expansion to other south asian countries.",
        projectResponsibilities: [
            "Created the product architecture after multiple sessions with the business stakeholders, product owners, development team and seller partners.",
            "Decided the tech stack for the application and designed user journey flow.",
            "Designed the application ecosystem using sitecore orderclould,React,Flutter (Only for mobile app), Golang and Azure app services.",
            "Closely worked with scrum team and product owners to create a sustainable roadmap for product scalability."
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
