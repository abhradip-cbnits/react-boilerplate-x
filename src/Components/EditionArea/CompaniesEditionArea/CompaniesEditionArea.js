import React, { useEffect, useState } from "react";
import { Row, Col, Input, Card, Button, Drawer, Space, Switch} from "antd";

const CompaniesEditionArea = (props) => {

    const [open, setOpen] = useState(false);
    const [companyList, setCompanyList] = useState([]);

    const openDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    useEffect(() => {
        if (props?.content?.length){
            setCompanyList([...props.content])
        }
    }, [props])

    return(
        <>
            <div className="flex flex-row justify-end items-center">
                <span className="pr-14">
                    <Button onClick={() => openDrawer()} type="primary" className="body-font font-josefin-sans bg-blue-500 hover:bg-blue-500">Add Company</Button>
                </span>
            </div>
            <div className="flex flex-wrap w-full justify-center">
                {
                    companyList.length > 0 ?
                        companyList && companyList.map((item, index) => {
                            return(
                                <div className="p-10">
                                    <Card className="body-font font-josefin-sans shadow-xl" title={item?.companyName} bordered={true} style={{ width: 300 }}>
                                        <p className="body-font font-josefin-sans text-base">Role</p>
                                        <p className="body-font font-josefin-sans text-xs mb-4"> {item?.role}</p>
                                        <p className="body-font font-josefin-sans text-base">Stint</p>
                                        <p className="body-font font-josefin-sans text-xs mb-4"> {item?.stint}</p>
                                        <Switch checkedChildren="Visible" unCheckedChildren="Hidden" checked={item?.show ? true : false} />
                                    </Card>
                                </div>
                            )

                        })
                    :
                    null
                }
            </div>
            <Drawer
                className="body-font font-josefin-sans"
                title="Add Company"
                placement="right"
                onClose={()=> closeDrawer()}
                open={open}
                extra={
                    <Space>
                      <Button type="primary" className="body-font font-josefin-sans bg-blue-500 hover:bg-blue-500">
                        Submit
                      </Button>
                    </Space>
                  }
                >
               <Row>
                    <Col span={24} className="flex flex-col mb-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Company Name</label>
                        <Input placeholder="Company Name" />
                    </Col>

                    <Col span={24} className="flex flex-col mb-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Role</label>
                        <Input placeholder="Role" />
                    </Col>

                    <Col span={24} className="flex flex-col mb-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Stint</label>
                        <Input placeholder="Stint" />
                    </Col>
               </Row>
            </Drawer>
        </>
    )
}

export default CompaniesEditionArea;
