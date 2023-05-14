import React, { useEffect, useState } from "react";
import {Button, Input} from "antd";
import { useDispatch } from 'react-redux';
import { modifyIntroduction } from "../../../Redux/Features/information";
import { unwrapResult } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const { TextArea } = Input;

const IntroductionEditionArea = (props) => {

    const dispatch = useDispatch();
    const [introductionData, setIntroductionData]  = useState("");
    const [introductionId, setIntroductionId] = useState(null);


    const updateIntroduction = (event) => {
        event.preventDefault();
        const payload = {
            id : introductionId,
            data: {
                description : {
                    data : introductionData
                }
            }
        };
        dispatch(modifyIntroduction(payload))
        .then(unwrapResult)
        .then((result)=> {
            toast.success(result?.data?.message);
        }).catch((e)=> {
            toast.error("Something went wrong");
        })
    }

    const handleTextChange = (event) => {
        setIntroductionData(event.target.value);
    }

    useEffect(() => {
        if (props?.content){
            setIntroductionId(props?.content?._id);
            setIntroductionData(props?.content?.description?.data)
        }
    }, [props])

    return(
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full justify-center items-center p-4">
                        <TextArea
                            showCount
                            value={introductionData}
                            style={{
                                height: 120,
                                marginBottom: 24,
                            }}
                            placeholder="Type introduction here"
                            onChange={handleTextChange}
                        />
                </div>
                <div className="flex items-center">
                    <Button onClick={(e)=> updateIntroduction(e)} type="primary" className="m-4 body-font font-josefin-sans bg-blue-500 hover:bg-blue-500">Save</Button>
                </div>
            </div>
        </>
    )
}


export default IntroductionEditionArea;
