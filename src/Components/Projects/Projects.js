import React from "react";
import {Row, Col} from "antd";

const Projects = () => {
    return(
        <>
            <Row>
                <Col span={12} className="flex justify-center items-center">
                    <img src={'assets/Source code-bro.png'} style={{height: "70%"}} alt="project-illustration"/>
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={24}>
                            <div className="flex flex-row justify-center pb-2">
                                <span>
                                    <p className="body-font font-cookie text-5xl flex justify-center items-center">
                                        My projects
                                    </p>
                                </span>
                            </div>

                            <span className="flex flex-row justify-center text-s body-font font-roboto-mono">
                                <p>To know more about my projects,</p>
                                <p style={{textDecoration : "underline"}}> click here</p>
                            </span>
                        </Col>
                    </Row>

                    {/* For project listing */}
                    <Row>
                        <Col span={12} className="flex justify-center items-center">
                            <span>
                                <img src={'assets/marketsword.png'} style={{height: "180px"}} alt="marketsworld"/>
                            </span>
                        </Col>
                        <Col span={12} className="flex justify-center items-center">
                            <span>
                                <img src={'assets/dpc.png'} style={{height: "30px"}} alt="patient-care-plus"/>
                            </span>
                        </Col>
                    </Row>

                    <Row className="pb-14">
                        <Col span={12} className="flex justify-center items-center">
                            <span>
                                <img src={'assets/ezrxlogo.png'} style={{height: "40px"}} alt="ezrx"/>
                            </span>
                        </Col>
                        <Col span={12} className="flex justify-center items-center">
                            <span>
                                <img src={'assets/knovva.png'} style={{height: "40px"}} alt="knovva-academy"/>
                            </span>
                        </Col>
                    </Row>

                    <Row className="pb-14">
                        <Col span={12} className="flex justify-center items-center">
                            <span>
                                <img src={'assets/zola.png'} style={{height: "50px"}} alt="zola"/>
                            </span>
                        </Col>
                        <Col span={12} className="flex justify-center items-center">
                            <span>
                                <img src={'assets/ezhealth.png'} style={{height: "30px"}} alt="ezhealth"/>
                            </span>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={12} className="flex justify-center items-center">
                            <span>
                                <img src={'assets/ezpharmacy.png'} style={{height: "30px"}} alt="ezpharmacy"/>
                            </span>
                        </Col>
                        <Col span={12} className="flex justify-center items-center">
                            <span>
                                <img src={'assets/catchletter.jpg'} style={{height: "50px"}} alt="catchletter"/>
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Projects;
