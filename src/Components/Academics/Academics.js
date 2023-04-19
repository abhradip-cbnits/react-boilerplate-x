import React from "react";
import {Row, Col} from "antd";

const Academics = () => {
    return(
        <>
        <Row className="pl-10">
            <Col span={12}>
                <Row className="p-4">
                    <Col span={24}>
                        <p className="body-font font-cookie text-5xl">
                            Alma-mater
                        </p>
                    </Col>
                </Row>
                <Row className="p-4">
                    <Col span={24}>
                        {/* For Masters */}
                        <Row>
                           <Col span={24} className="pb-3">
                                <span>
                                    <p className="body-font font-courier text-lg">Master of Science (M.Sc) in Computer Science, St. Xavier`s College, Kolkata, India</p>
                                </span>
                           </Col>

                           <Col span={24} className="pb-3">
                                <span>
                                    <p className="body-font font-roboto-mono text-xs">July 2014 — May 2016</p>
                                </span>
                           </Col>

                           <Col span={24}>
                                <div className="flex flex-col pb-3">
                                    <span>
                                        <p className="body-font font-pacifico">Status</p>
                                    </span>

                                    <span>
                                        <p className="body-font font-roboto-mono text-xs">Completed</p>
                                    </span>
                                </div>

                           </Col>

                           <Col span={24}>
                                <div className="flex flex-col pb-3">
                                    <span>
                                        <p className="body-font font-pacifico">Percentage of Marks</p>
                                    </span>

                                    <span>
                                        <p className="body-font font-roboto-mono text-xs">63.79</p>
                                    </span>
                                </div>
                           </Col>

                           <Col span={24}>
                                <div className="flex flex-col pb-10">
                                    <span>
                                        <p className="body-font font-pacifico">Major Project</p>
                                    </span>

                                    <span>
                                        <p className="body-font font-roboto-mono text-xs">Intranet Communication System</p>
                                    </span>
                                </div>
                           </Col>

                        </Row>

                        {/* For Graduation */}
                        <Row>
                            <Col span={24} className="pb-3">
                                <span>
                                    <p className="body-font font-courier text-lg">Bachelor of Science (B.Sc) in Computer Science, Ramakrishna Mission Vidyamandira, Belur Math, Howrah, India</p>
                                </span>
                           </Col>

                           <Col span={24} className="pb-3">
                                <span>
                                    <p className="body-font font-roboto-mono text-xs">June 2011 — June 2014</p>
                                </span>
                           </Col>

                           <Col span={24}>
                                <div className="flex flex-col pb-3">
                                    <span>
                                        <p className="body-font font-pacifico">Status</p>
                                    </span>

                                    <span>
                                        <p className="body-font font-roboto-mono text-xs">Completed</p>
                                    </span>
                                </div>
                           </Col>

                           <Col span={24}>
                                <div className="flex flex-col pb-3">
                                    <span>
                                        <p className="body-font font-pacifico">Percentage of Marks</p>
                                    </span>

                                    <span>
                                        <p className="body-font font-roboto-mono text-xs">75.125</p>
                                    </span>
                                </div>
                           </Col>

                           <Col span={24}>
                                <div className="flex flex-col pb-3">
                                    <span>
                                        <p className="body-font font-pacifico">Major Project</p>
                                    </span>

                                    <span>
                                        <p className="body-font font-roboto-mono text-xs">Autonomous car - A Robotic System</p>
                                    </span>
                                </div>
                           </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col span={12} className="flex justify-center items-center">
                <img src={'assets/Learning-bro.png'} alt="learning-illustration"/>
            </Col>
        </Row>
        </>
    )
}

export default Academics;
