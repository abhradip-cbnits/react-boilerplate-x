import React, { useEffect, useState } from "react";
import { Card, Button, Drawer, Space, Row, Col} from "antd";
import DynamicInputField from '../../DynamicInputField/DynamicInputField';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinusSquare, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

const HobbiesEditionArea = (props) => {
    const [hobbies, setHobbies] = useState({});
    const [open, setOpen] = useState(false);
    const [interestInput, setInterestInput] = useState([<DynamicInputField placeholder="Add Interest"/>]);
    const [languageInput, setLanguageInput] = useState([<DynamicInputField placeholder="Add Language"/>]);

    const openDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    const addInput = (event, type) => {
        event.preventDefault();
        if (type === "interest"){
            setInterestInput([...interestInput, <DynamicInputField placeholder="Add Interest"/>])
        } else if (type === "language"){
            setLanguageInput([...languageInput, <DynamicInputField placeholder="Add Language"/>])
        }
    }
    const removeInput = (event, type) => {
        event.preventDefault();
        if (type === "interest"){
            interestInput.splice(-1);
            setInterestInput([...interestInput])
        } else if (type === "language"){
            languageInput.splice(-1);
            setLanguageInput([...languageInput])
        }
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
                        <div className="flex flex-col mb-4">
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
                        <div className="flex flex-col">
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
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Interest</label>
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-end items-center">
                                <FontAwesomeIcon icon={faPlusSquare} className="p-2" style={{cursor: "pointer", height: "20px"}} onClick={(e)=> addInput(e, "interest")}/>
                                <FontAwesomeIcon icon={faMinusSquare} className="p-2" style={{cursor: "pointer", height: "20px"}} onClick={(e)=> removeInput(e, "interest")}/>
                            </div>
                            <div className="flex flex-col">
                                {interestInput}
                            </div>
                        </div>
                    </Col>

                    <Col span={24} className="flex flex-col mb-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Languages</label>
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-end items-center">
                                <FontAwesomeIcon icon={faPlusSquare} className="p-2" style={{cursor: "pointer", height: "20px"}} onClick={(e)=> addInput(e, "language")}/>
                                <FontAwesomeIcon icon={faMinusSquare} className="p-2" style={{cursor: "pointer", height: "20px"}} onClick={(e)=> removeInput(e, "language")}/>
                            </div>
                            <div className="flex flex-col">
                                {languageInput}
                            </div>
                        </div>
                    </Col>
               </Row>
            </Drawer>
        </>
    )
}

export default HobbiesEditionArea;
