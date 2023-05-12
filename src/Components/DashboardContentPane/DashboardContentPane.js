import React from "react";
import {Row, Col} from "antd";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import DashboardFooter from "../DashboardFooter/DashboardFooter";
import DashboardBody from "../DashboardBody/DashboardBody";


const DashboardContentPane = () => {
    return (
        <>
            <Row className="bg-gray-100 h-screen">
                <Col span={24}>

                    {/* For DashboardHeader component */}
                    <Row>
                        <Col span={24}>
                            <DashboardHeader/>
                        </Col>
                    </Row>

                    {/* For DashboardBody component */}
                    <Row>
                        <Col span={24}>
                            <DashboardBody/>
                        </Col>
                    </Row>

                    {/* For DashboardFooter component */}
                    <Row>
                        <Col span={24} className="absolute bottom-0 w-full">
                            <DashboardFooter/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default DashboardContentPane;
