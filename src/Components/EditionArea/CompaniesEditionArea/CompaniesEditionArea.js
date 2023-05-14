import React, { useEffect, useState } from "react";
import { Row, Col, Input, Card, Button, Drawer, Space, Switch} from "antd";
import { useDispatch } from 'react-redux';
import { modifyCompanies } from "../../../Redux/Features/information";
import { unwrapResult } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const CompaniesEditionArea = (props) => {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [companyList, setCompanyList] = useState([]);
    const [companiesId, setCompaniesId] = useState(null);
    const [mutableCompanyName, setMutableCompanyName] = useState("");
    const [mutableCompanyRole, setMutableCompanyRole] = useState("");
    const [mutableCompanyStint, setMutableCompanyStint] = useState("");


    const openDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    const handleInputChange = (event, type) => {
        if (type === "companyName"){
            setMutableCompanyName(event.target.value);
        }else if (type === "companyRole"){
            setMutableCompanyRole(event.target.value);
        }else if (type === "companyStint"){
            setMutableCompanyStint(event.target.value);
        }
    }

    const addCompany = (event) => {
        event.preventDefault();
        if (mutableCompanyName && mutableCompanyRole && mutableCompanyStint){
            const newCompany = {
                companyName : mutableCompanyName,
                role : mutableCompanyRole,
                stint : mutableCompanyStint,
                show : true
            }
            const companyAll = [...companyList];
            companyAll.unshift(newCompany);

            const payload = {
                id: companiesId,
                data : {
                    description : companyAll
                }
            }

            dispatch(modifyCompanies(payload))
            .then((unwrapResult))
            .then((result) => {
                closeDrawer();
                setMutableCompanyName("");
                setMutableCompanyRole("");
                setMutableCompanyStint("");
                setCompanyList([...companyAll]);
                toast.success(result?.data?.message);
            })
            .catch((err) => {
                toast.error("Something went wrong");
            })
        }else{
            toast.error("Please fillup the details");
        }
    }

    useEffect(() => {
        if (props?.content?.description?.length){
            setCompanyList([...props.content?.description]);
            setCompaniesId(props?.content?._id);
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
                      <Button onClick={(e) => addCompany(e)} type="primary" className="body-font font-josefin-sans bg-blue-500 hover:bg-blue-500">
                        Submit
                      </Button>
                    </Space>
                  }
                >
               <Row>
                    <Col span={24} className="flex flex-col mb-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Company Name</label>
                        <Input onChange={(e)=> handleInputChange(e, "companyName")} value={mutableCompanyName} placeholder="Company Name" />
                    </Col>

                    <Col span={24} className="flex flex-col mb-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Role</label>
                        <Input onChange={(e)=> handleInputChange(e, "companyRole")} value={mutableCompanyRole} placeholder="Role" />
                    </Col>

                    <Col span={24} className="flex flex-col mb-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900 body-font font-josefin-sans">Stint</label>
                        <Input onChange={(e)=> handleInputChange(e, "companyStint")} value={mutableCompanyStint} placeholder="Stint" />
                    </Col>
               </Row>
            </Drawer>
        </>
    )
}

export default CompaniesEditionArea;
