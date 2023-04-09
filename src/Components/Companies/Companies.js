import React from "react";
import {Row, Col} from "antd";

const Companies = () => {
    return(
        <>
            <Row className="pl-10">
                <Col span={12}>
                    <Row className="p-4">
                        <Col span={24}>
                            <p className="body-font font-cookie text-5xl">
                                Companies I've worked with
                            </p>
                        </Col>
                    </Row>

                    <Row className="p-4">
                        <Col span={24}>
                            {/* Company Listings */}
                            <Row>
                                <Col span={24} className="pb-3">
                                    <span>
                                        <p className="body-font font-courier text-base">CBNITS India Private Limited</p>
                                    </span>
                                </Col>

                                <Col span={24}>
                                    <div className="flex flex-col pb-3">
                                        <span>
                                            <p className="body-font font-pacifico">
                                                Role
                                            </p>
                                        </span>

                                        <span>
                                            <p className="body-font font-roboto-mono text-xs">
                                                Module Leader, Application Development
                                            </p>
                                        </span>
                                    </div>
                                </Col>

                                <Col span={24}>
                                    <div className="flex flex-col pb-10">
                                        <span>
                                            <p className="body-font font-pacifico">
                                                Stint
                                            </p>
                                        </span>

                                        <span>
                                            <p className="body-font font-roboto-mono text-xs">
                                                October 2018 - Present
                                            </p>
                                        </span>
                                    </div>
                                </Col>
                            </Row>


                            <Row>
                                <Col span={24} className="pb-3">
                                    <span>
                                        <p className="body-font font-courier text-base">Branium Information Technologies Private Limited</p>
                                    </span>
                                </Col>

                                <Col span={24}>
                                    <div className="flex flex-col pb-3">
                                        <span>
                                            <p className="body-font font-pacifico">
                                                Role
                                            </p>
                                        </span>

                                        <span>
                                            <p className="body-font font-roboto-mono text-xs">
                                                Senior Web Developer
                                            </p>
                                        </span>
                                    </div>
                                </Col>

                                <Col span={24}>
                                    <div className="flex flex-col pb-10">
                                        <span>
                                            <p className="body-font font-pacifico">
                                                Stint
                                            </p>
                                        </span>

                                        <span>
                                            <p className="body-font font-roboto-mono text-xs">
                                            Januray 2018 - August 2018
                                            </p>
                                        </span>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24} className="pb-3">
                                    <span>
                                        <p className="body-font font-courier text-base">IndustryPrime</p>
                                    </span>
                                </Col>

                                <Col span={24}>
                                    <div className="flex flex-col pb-3">
                                        <span>
                                            <p className="body-font font-pacifico">
                                                Role
                                            </p>
                                        </span>

                                        <span>
                                            <p className="body-font font-roboto-mono text-xs">
                                                Software Engineer
                                            </p>
                                        </span>
                                    </div>
                                </Col>

                                <Col span={24}>
                                    <div className="flex flex-col pb-3">
                                        <span>
                                            <p className="body-font font-pacifico">
                                                Stint
                                            </p>
                                        </span>

                                        <span>
                                            <p className="body-font font-roboto-mono text-xs">
                                                June 2016 - December 2017
                                            </p>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
                <Col span={12} className="flex justify-center items-center">
                    <img src={'assets/New team members-bro.png'} alt="company-illustration"/>
                </Col>
            </Row>
        </>
    )
}

export default Companies;
