import React, { useEffect, useState } from "react";
import {Button, Input} from "antd";

const { TextArea } = Input;

const ProjectsEditionArea = (props) => {

    const [projectDescription, setProjectDescription] = useState([]);

    useEffect(() => {
        if (props?.content?.length){
            setProjectDescription([...props.content])
        }
    }, [props])

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
                                        maxLength={100}
                                        style={{
                                            height: 120,
                                            marginBottom: 24,
                                        }}
                                    />
                                )
                            })
                        :
                        null
                    }
                </div>
                <div className="flex items-center">
                    <Button type="primary" className="m-4 body-font font-josefin-sans bg-blue-500 hover:bg-blue-500">Save</Button>
                </div>
            </div>
        </>
    )
}


export default ProjectsEditionArea;
