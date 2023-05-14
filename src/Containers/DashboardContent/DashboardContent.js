import React, {useState} from "react";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import DashboardContentPane from "../../Components/DashboardContentPane/DashboardContentPane";
import {Row, Col, Spin} from "antd";
import { DashboardContext } from "../../Contexts/DashboardContext";
import { useNavigate } from "react-router-dom";
import styles from './index.module.css'

const DashboardContent = () => {

    const navigate = useNavigate();

    const [activeMenuItem, setActiveMenuItem] = useState({
        index: 1,
        value: 'Introduction'
    });

    const handleLogout = () => {
        localStorage.clear();
        navigate("/admin");
    }

    return (
        <>
            <DashboardContext.Provider value={{activeMenuItem, setActiveMenuItem, handleLogout}}>
                {/* <Row>
                    <Col span={24} className={styles.spinner_holder}>
                        <Spin/>
                    </Col>
                </Row> */}
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
