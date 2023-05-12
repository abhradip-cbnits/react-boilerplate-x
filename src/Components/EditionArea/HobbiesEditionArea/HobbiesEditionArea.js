import React, { useEffect, useState } from "react";
import { Card, Button, Drawer, Space, Row, Col, Input } from "antd";

const HobbiesEditionArea = (props) => {
    const [hobbies, setHobbies] = useState({});
    const [open, setOpen] = useState(false);

    const openDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    useEffect(() => {
        setHobbies({...props.content})
    }, [props]);

    return(
        <>
            <div className="flex flex-row justify-end items-center">
                <span className="pr-14">
                    <Button onClick={()=> openDrawer()} type="primary" className="body-font font-josefin-sans bg-blue-500 hover:bg-blue-500">Add Hobbies</Button>
                </span>
            </div>
            <div className="flex flex-wrap w-full justify-center">
                <div className="p-10">
                    <Card className="body-font font-josefin-sans shadow-xl" title="General Information" bordered={true} style={{ width: 300 }}>
                        <p className="body-font font-josefin-sans text-base">Hobbies</p>
                        <div className="flex flex-row mb-4">
                            {
                                hobbies?.description?.interest?.length > 0 ?
                                    hobbies?.description?.interest.map ((item, index) => {
                                        return(
                                            <p className="body-font font-josefin-sans text-xs"> {item}</p>
                                        )
                                    })
                                :
                                null
                            }
                        </div>

                        <p className="body-font font-josefin-sans text-base">Languages</p>
                        <div className="flex flex-row">
                            {
                                hobbies?.description?.languages?.length > 0 ?
                                    hobbies?.description?.languages.map ((item, index) => {
                                        return(
                                            <p className="body-font font-josefin-sans text-xs"> {item}</p>
                                        )
                                    })
                                :
                                null
                            }
                        </div>
                    </Card>
                </div>
            </div>
            <Drawer
                className="body-font font-josefin-sans"
                title="Add Hobbies"
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
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Publication Title</label>
                        <Input placeholder="Publication Title" />
                    </Col>

                    <Col span={24} className="flex flex-col mb-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Publication Sub-title</label>
                        <Input placeholder="Publication Sub-title" />
                    </Col>

                    <Col span={24} className="flex flex-col mb-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Journal</label>
                        <Input placeholder="Journal" />
                    </Col>
               </Row>
            </Drawer>
        </>
    )
}

export default HobbiesEditionArea;
