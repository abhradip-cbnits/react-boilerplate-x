import React, { useEffect, useState } from "react";
import { Card, Button, Drawer, Space, Input, Row, Col } from "antd";

const PublicationsEditionArea = (props) => {

    const [publications, setPublications] = useState([]);
    const [open, setOpen] = useState(false);

    const openDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    useEffect(() => {
        if (props?.content?.length){
            setPublications([...props.content])
        }
    }, [props])

    return(
        <>
            <div className="flex flex-row justify-end items-center">
                <span className="pr-14">
                    <Button onClick={()=> openDrawer()} type="primary" className="body-font font-josefin-sans bg-blue-500 hover:bg-blue-500">Add Publication</Button>
                </span>
            </div>
            <div className="flex flex-wrap w-full justify-center">
                {
                    publications.length > 0 ?
                        publications && publications.map((item, index) => {
                            return(
                                <div className="p-10">
                                <Card className="body-font font-josefin-sans shadow-xl" title={item?.title} bordered={true} style={{ width: 300 }}>
                                    <p className="body-font font-josefin-sans text-xs mb-4"> {item?.subtitle}</p>
                                    <p className="body-font font-josefin-sans text-xs"> {item?.journal}</p>
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
                title="Add Publications"
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

export default PublicationsEditionArea;
