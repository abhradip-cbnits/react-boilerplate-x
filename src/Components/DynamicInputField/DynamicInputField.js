import React from "react";
import {Input} from 'antd';


const DynamicInputField = (props) => {
    return(
        <>
            <Input placeholder={props.placeholder} className="mb-2"/>
        </>
    )
}

export default DynamicInputField;
