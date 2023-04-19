import React from "react";
import {Button, Card, Input} from "antd";

const { TextArea } = Input;
const data = "Hi there, This is Abhradip Ghosh, an experienced Software Developer adept in bringing forth expertise in design, architect, develop, testing and maintenance of software systems. I am equipped with a diverse and promising skill-set. Specialized on MERN stack with experience of more than 6 years on the same domain. I am also having the working experience of Ruby on Rails domain and related tech stack. I have the proficiency in various platforms, languages, and embedded systems.";

const DashboardBody = () => {
    return (
        <>
            <div className="bg-white ml-4 mr-4 h-auto drop-shadow-lg flex flex-col">
                <div className="flex p-4 w-full">
                    <span>
                        <p className="body-font font-josefin-sans text-2xl" style={{color: "#1677ff"}}>Content Management - Introduction</p>
                    </span>
                </div>
                <div className="flex w-full">
                    <div className="flex w-6/12 justify-center items-center p-4">
                        <Card type="inner" title="Content Editor" style={{fontFamily: "Josefin Sans"}}>
                           <span>
                                <p className="pb-2">
                                    Please update the following section in order to reflect the changes in website
                                </p>
                           </span>
                            <TextArea
                                showCount
                                value={data}
                                maxLength={100}
                                style={{
                                    height: 120,
                                    marginBottom: 24,
                                }}
                            placeholder="can resize"
                            />

                            <Button type="primary" className="body-font font-josefin-sans bg-blue-500 hover:bg-blue-500">Save</Button>
                        </Card>
                    </div>

                    <div className="flex w-6/12 justify-center items-center p-4">
                        <Card type="inner" title="Current Data" style={{fontFamily: "Josefin Sans"}}>
                            {data}
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )

}

export default DashboardBody;
