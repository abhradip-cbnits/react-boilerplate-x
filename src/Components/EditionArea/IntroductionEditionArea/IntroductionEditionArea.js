import React, { useEffect, useState } from "react";
import {Button, Input} from "antd";

const { TextArea } = Input;

const IntroductionEditionArea = (props) => {
    const [introductionData, setIntroductionData]  = useState("");

    useEffect(() => {
        if (props?.content){
            setIntroductionData(props?.content)
        }
    }, [props])

    return(
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full justify-center items-center p-4">
                        <TextArea
                            showCount
                            value={introductionData}
                            maxLength={100}
                            style={{
                                height: 120,
                                marginBottom: 24,
                            }}
                            placeholder="Type introduction here"
                        />
                </div>
                <div className="flex items-center">
                    <Button type="primary" className="m-4 body-font font-josefin-sans bg-blue-500 hover:bg-blue-500">Save</Button>
                </div>
            </div>
        </>
    )
}


export default IntroductionEditionArea;
