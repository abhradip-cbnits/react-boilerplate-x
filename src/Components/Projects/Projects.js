import React from "react";
import {Row, Col, Button} from "antd";


const Projects = () => {
    return(
        <>
            <Row>
                <Col span={12} className="flex justify-center items-center">
                    <img src={'assets/Source code-bro.png'} style={{height: "50%"}} alt="project-illustration"/>
                </Col>
                <Col span={12} className="pr-14">
                    <Row>
                        <Col span={24}>
                            <div className="flex flex-row justify-center pb-10">
                                <span>
                                    <p className="body-font font-cookie text-5xl flex justify-center items-center">
                                        My projects
                                    </p>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Row className="pb-5">
                                <Col span={24}>
                                    <span>
                                        <p className="body-font font-courier text-base" style={{textAlign: "justify"}}>
                                            I have been working with Healthcare industries and it's corresponding huge range of
                                            product set for past 4 years. I have closedly worked on different phases e.g planning and buidling of
                                            product skeletons, core development, deployement and infrastructure maintenance for a dynamic range of
                                            product sub-domains like teleconsultation, telemedication, pharmaceutical e-commerce & healthcare analytics.
                                        </p>
                                    </span>
                                </Col>
                            </Row>

                            <Row className="pb-5">
                                <Col span={24}>
                                    <span>
                                        <p className="body-font font-courier text-base" style={{textAlign: "justify"}}>
                                            I have worked with Fintech companies to build and maintain products for regulated binary option trading.
                                        </p>
                                    </span>
                                </Col>
                            </Row>

                            <Row className="pb-5">
                                <Col span={24}>
                                    <span>
                                        <p className="body-font font-courier text-base" style={{textAlign: "justify"}}>
                                            I have worked with Edtech giants to build their globally accessible and scable product for e-learning.
                                        </p>
                                    </span>
                                </Col>
                            </Row>

                            <Row className="pb-5">
                                <Col span={24}>
                                    <span>
                                        <p className="body-font font-courier text-base" style={{textAlign: "justify"}}>
                                            I have developed the procurement solution from scratch for heavy engineering industries which is a SEM (Software Enabled Marketplace) in order
                                            to streamline the supply chain management.
                                        </p>
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} className="flex flex-row justify-center items-center">
                            <span>
                                <p>To know more about my projects &nbsp; &nbsp;</p>
                            </span>
                            <span>
                                <Button style={{fontFamily: "cookie", border: "2px solid black", borderRadius: "1px", fontSize: "20px", boxSizing: "initial"}}>Click here </Button>
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Projects;
