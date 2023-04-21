import React, {useState} from "react";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import DashboardContentPane from "../../Components/DashboardContentPane/DashboardContentPane";
import {Row, Col} from "antd";
import { DashboardContext } from "../../Contexts/DashboardContext";

const DashboardContent = () => {

    const [activeMenuItem, setActiveMenuItem] = useState({
        index: 1,
        value: 'Introduction'
    });

    return (
        <>
            <DashboardContext.Provider value={{activeMenuItem, setActiveMenuItem}}>
                <Row>
                    <Col span={4}>
                        <DashboardSidebar/>
                    </Col>

                    <Col span={20}>
                        <DashboardContentPane/>
                    </Col>
                </Row>
            </DashboardContext.Provider>
        </>
    )

}

export default DashboardContent;
