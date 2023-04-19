import React from "react";
import {Row, Col} from "antd";

const GeneralInfo = () => {
    return(
        <>
        <Row className="pl-10 flex justify-center items-center">
            <Col span={12} className="p-4">
                <Row>
                    <Col span={24} className="pb-8">
                        <span>
                            <p className="body-font font-cookie text-5xl">Beyond Barriers</p>
                        </span>
                    </Col>
                </Row>
                <Row className="pb-3">
                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <span>
                                    <p className="body-font font-pacifico">Languages</p>
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <span>
                                    <p className="body-font font-courier text-base">English, Hindi, Bengali</p>
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="pb-3">
                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <span>
                                    <p className="body-font font-pacifico">Hobbies</p>
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <span>
                                    <p className="body-font font-courier text-base">Travelling, Cooking, Mythological Research</p>
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col span={12} className="flex justify-center items-center">
                <img src={'assets/Cornhole-bro.png'} alt="general-info-illustration"/>
            </Col>
        </Row>
        </>
    )
}

export default GeneralInfo;
