import React, {useState, useEffect} from "react";
import { Card, Button, Drawer, Input, Row, Col, Space } from "antd";
import DynamicInputField from '../../DynamicInputField/DynamicInputField';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinusSquare, faPlusSquare} from '@fortawesome/free-solid-svg-icons'

const { TextArea } = Input;

const PortfolioEditionArea = (props) => {

    const [projectList, setProjectList] = useState([]);
    const [responsibilityInput, setResponsibilityInput] = useState([<DynamicInputField/>])
    const [open, setOpen] = useState(false);

    const openDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    const addInput = (event) => {
        event.preventDefault();
        setResponsibilityInput([...responsibilityInput,<DynamicInputField />])
    }

    const removeInput = (event) => {
        event.preventDefault();

    }

    useEffect(()=> {
        if (props.content){
            setProjectList([...props.content])
        }
    },[props])

    return(
        <>
            <div className="flex flex-row justify-end items-center">
                <span className="pr-14">
                    <Button onClick={()=> openDrawer()} type="primary" className="body-font font-josefin-sans bg-blue-500 hover:bg-blue-500">Add Project</Button>
                </span>
            </div>
            <div className="flex flex-wrap w-full justify-center">
                {
                    projectList.length > 0 ?
                        projectList && projectList.map((item, index) => {
                            return(
                                <div className="p-10">
                                <Card className="body-font font-josefin-sans shadow-xl" title={item?.name} bordered={true} style={{ width: 300 }}>
                                    <p className="body-font font-josefin-sans text-base">Description</p>
                                    <p className="body-font font-josefin-sans text-xs mb-4"> {item?.description}</p>
                                    <p className="body-font font-josefin-sans text-base">Responsibilities</p>
                                    {
                                        item?.responsibilities && item?.responsibilities.map((responsibility, i)=> {
                                            <p className="body-font font-josefin-sans text-xs"> {responsibility}</p>
                                        })
                                    }
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
                title="Add Project"
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
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Project Name</label>
                        <Input placeholder="Project Name" />
                    </Col>

                    <Col span={24} className="flex flex-col mb-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Project Description</label>
                        <TextArea
                            showCount
                            value=""
                            maxLength={100}
                            style={{
                                height: 120,
                                marginBottom: 24,
                            }}
                            placeholder="Project Description"
                        />
                    </Col>

                    <Col span={24} className="flex flex-col mb-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Responsibilities</label>
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-end items-center">
                                <FontAwesomeIcon icon={faPlusSquare} className="p-2" style={{cursor: "pointer", height: "20px"}} onClick={(e)=> addInput(e)}/>
                                <FontAwesomeIcon icon={faMinusSquare} className="p-2" style={{cursor: "pointer", height: "20px"}} onClick={(e)=> removeInput(e)}/>
                            </div>
                            <div className="flex flex-col">
                                {responsibilityInput}
                            </div>
                        </div>
                    </Col>
               </Row>
            </Drawer>
        </>
    )
}


export default PortfolioEditionArea;
