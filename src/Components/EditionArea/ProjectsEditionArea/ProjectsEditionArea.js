import React, { useEffect, useState } from "react";
import {Button, Input} from "antd";
import { useDispatch } from 'react-redux';
import { modifyProject } from "../../../Redux/Features/information";
import { unwrapResult } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const { TextArea } = Input;

const ProjectsEditionArea = (props) => {

    const dispatch = useDispatch();
    const [projectDescription, setProjectDescription] = useState([]);
    const [projectDescriptionId, setProjectDescriptionId] = useState(null);

    useEffect(() => {
        if (props?.content?.description?.data?.length){
            setProjectDescription([...props.content?.description?.data]);
            setProjectDescriptionId(props?.content?._id);
        }
    }, [props])

    const handleChange = (event, key) => {
        const modified_data_set = [...projectDescription];
        modified_data_set[key] = event.target.value;
        setProjectDescription(modified_data_set);
    }

    const updateProjectSummary = (event) => {
        event.preventDefault();
        const payload = {
            id: projectDescriptionId,
            data: {
                description : {
                    data : projectDescription
                }
            }
        }
        dispatch(modifyProject(payload))
        .then(unwrapResult)
        .then((result)=> {
            toast.success(result?.data?.message);
        }).catch((e)=> {
            toast.error("Something went wrong");
        })
    }

    return(
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full justify-center items-center p-4">
                    {
                        projectDescription?.length > 0 ?
                            projectDescription && projectDescription.map((element, index) => {
                                return(
                                    <TextArea
                                        showCount
                                        value={element}
                                        style={{
                                            height: 120,
                                            marginBottom: 24,
                                        }}
                                        onChange={(e)=> handleChange(e,index)}
                                    />
                                )
                            })
                        :
                        null
                    }
                </div>
                <div className="flex items-center">
                    <Button onClick={(e)=> updateProjectSummary(e)} type="primary" className="m-4 body-font font-josefin-sans bg-blue-500 hover:bg-blue-500">Save</Button>
                </div>
            </div>
        </>
    )
}


export default ProjectsEditionArea;
