import React from "react";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import DashboardContentPane from "../../Components/DashboardContentPane/DashboardContentPane";
import {Row, Col} from "antd";

const DashboardContent = () => {
    return (
        <>
            <Row>
                <Col span={4}>
                    <DashboardSidebar/>
                </Col>

                <Col span={20}>
                    <DashboardContentPane/>
                </Col>
            </Row>
        </>
    )

}

export default DashboardContent;
