import React from "react";
import {Row, Col, Menu} from "antd";
import {
    ProjectTwoTone,
    InfoCircleTwoTone,
    TrophyTwoTone,
    ScheduleTwoTone,
    IdcardTwoTone,
    PictureTwoTone

  } from '@ant-design/icons';


const getItem = (label, key, icon) => {
    return {
        key,
        icon,
        label
      };
}

const items = [
    getItem('Introduction', '1', <InfoCircleTwoTone />),
    getItem('Companies', '2', <IdcardTwoTone />),
    getItem('Projects', '3', <ProjectTwoTone />),
    getItem('Education', '4', <ScheduleTwoTone />),
    getItem('Publication', '5', <TrophyTwoTone />),
    getItem('Hobbies', '6', <PictureTwoTone />)
  ];


const DashboardSidebar = () => {
    return (
        <div className="bg-white h-full">
            <Row>
                <Col span={24} className="flex flex-col justify-center items-center p-11">
                    <span>
                        <p className="body-font font-josefin-sans text-xs">
                            Version 1.0.0
                        </p>
                    </span>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                        style={{fontFamily: "Josefin Sans"}}
                    />
                </Col>
            </Row>
        </div>
    )

}

export default DashboardSidebar;